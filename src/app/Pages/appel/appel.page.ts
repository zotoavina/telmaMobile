import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActionService } from '../../services/action.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-appel',
  templateUrl: './appel.page.html',
  styleUrls: ['./appel.page.scss'],
})
export class AppelPage implements OnInit {

  form : FormGroup;
  reponse : any ={};
  message : any;

  constructor(private utils_service : UtilsService,private action_service: ActionService){
    this.toFormGroup();
  }
    
  ngOnInit() {
  }
  
  toFormGroup() {
    const group: any = {};
    group["receveur"]      = new FormControl("",Validators.required);
    group["duree"]  = new FormControl("",Validators.required);
    this.form = new FormGroup(group);
  }

  fillFromForm() : void {
    this.reponse["receveur"] = this.form.get("receveur")?.value;
    this.reponse["duree"]  = this.form.get("duree")?.value;
  }

  appeler(){
    const success = data =>{
      console.log(data);
      if(data.status == 200){
        this.message = data.message;
      }
     }

    const error = data =>{
      console.log(data);
      this.message = data.error.message;
    }
    this.fillFromForm();
    this.action_service.appeler(this.reponse).subscribe(success, error);
  }

}
