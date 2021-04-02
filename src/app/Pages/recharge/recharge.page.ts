import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionService } from '../../services/action.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.page.html',
  styleUrls: ['./recharge.page.scss'],
})
export class RechargePage implements OnInit {

  reponse : any ={};
  form : FormGroup;
  message : any;
  
  constructor(private action_service : ActionService, private utils_service: UtilsService,private router : Router) { }

  ngOnInit() {
    this.toFormGroup() ;
  }

 
  toFormGroup() {
    const group: any = {};
    group["montant"] = new FormControl("",Validators.required);
    this.form = new FormGroup(group);
  }

  fillFromForm() : void {
    this.reponse["montant"] = this.form.get("montant")?.value;
    this.reponse["idTypeAction"]  = 3;
  }

  action(){
    const success = data =>{
      if(data.status == 200){
        this.message = data.message;
      }
      this.utils_service.redirect(data,401,"/",this.router);
     }

    const error = data =>{
      this.message = data.error.message;
      this.utils_service.redirect(data,401,"/",this.router);
    }
    this.fillFromForm();
    this.action_service.actionClient(this.reponse).subscribe(success, error);
  }
  
}
