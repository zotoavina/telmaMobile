import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActionService } from '../../services/action.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.page.html',
  styleUrls: ['./achat.page.scss'],
})
export class AchatPage implements OnInit {

  idForfait : any;
  nomForfait : any;
  reponse : any ={};
  form : FormGroup;
  message : any;
  modes : any = [
    {"id" : "credit","mode":"solde principale"},{"id" :"mvola","mode":"Mvola"}
  ]
  constructor(private action_service : ActionService, private utils_service: UtilsService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.idForfait = this.route.snapshot.paramMap.get("id");
    this.nomForfait = this.route.snapshot.paramMap.get("nom");
    this.toFormGroup() ;
  }

 
  toFormGroup() {
    const group: any = {};
    group["modepaiement"]      = new FormControl(this.modes[0].id);
    this.form = new FormGroup(group);
  }

  fillFromForm() : void {
    let strDate = this.utils_service.dateToString(new Date());
    this.reponse["modepaiement"] = this.form.get("modepaiement")?.value;
    this.reponse["dateachat"]  = strDate;
  }

  achatForfait(){
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
    this.action_service. achatForfait(this.idForfait,this.reponse).subscribe(success, error);
  }

 

}
