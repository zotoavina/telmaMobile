import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActionService } from '../../services/action.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {

  form : FormGroup;
  reponse : any ={};
  message : any;

  constructor(private utils_service : UtilsService,private action_service: ActionService, private router : Router){
    this.toFormGroup();
  }
    
  ngOnInit() {
  }
  
  toFormGroup() {
    const group: any = {};
    group["receveur"]      = new FormControl("",Validators.required);
    group["message"]  = new FormControl("");
    this.form = new FormGroup(group);
  }

  fillFromForm() : void {
    this.reponse["receveur"] = this.form.get("receveur")?.value;
    this.reponse["message"]  = this.form.get("message")?.value;
  }

  envoyerSms(){
    const success = data =>{
      console.log(data);
      if(data.status == 200){
        this.message = data.message;
      }
      this.utils_service.redirect(data,401,"/",this.router);
     }

    const error = data =>{
      console.log(data);
      this.message = data.error.message;
      this.utils_service.redirect(data,401,"/",this.router);
    }
    this.fillFromForm();
    this.action_service.sms(this.reponse).subscribe(success, error);
  }

}
