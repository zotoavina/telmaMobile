import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  
  constructor(private action_service : ActionService, private utils_service: UtilsService,
     private route : ActivatedRoute) { }

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
      console.log(data);
      if(data.status == 200){
        this.message = data.message;
        console.log(data.data);
      }
     }

    const error = data =>{
      console.log(data);
      this.message = data.error.message;
    }
    this.fillFromForm();
    console.log(this.reponse);
    this.action_service.actionClient(this.reponse).subscribe(success, error);
  }
  
}
