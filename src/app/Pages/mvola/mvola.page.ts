import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionService } from '../../services/action.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-mvola',
  templateUrl: './mvola.page.html',
  styleUrls: ['./mvola.page.scss'],
})
export class MvolaPage implements OnInit {

  reponse : any ={};
  form : FormGroup;
  message : any;
  modes : any = [
    {"id" : "1","mode":"depot"},{"id" :"2","mode":"retrait"}
  ]
  constructor(private action_service : ActionService, private utils_service: UtilsService,
     private route : ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.toFormGroup() ;
  }

 
  toFormGroup() {
    const group: any = {};
    group["montant"] = new FormControl("",Validators.required);
    group["typeaction"]      = new FormControl(this.modes[0].id);
    this.form = new FormGroup(group);
  }

  fillFromForm() : void {
    this.reponse["montant"] = this.form.get("montant")?.value;
    this.reponse["idTypeAction"]  =this.form.get("typeaction")?.value;
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
    console.log(this.reponse);
    this.action_service.actionClient(this.reponse).subscribe(success, error);
  }


}
