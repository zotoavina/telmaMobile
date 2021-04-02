import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionService } from '../../services/action.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-internet',
  templateUrl: './internet.page.html',
  styleUrls: ['./internet.page.scss'],
})
export class InternetPage implements OnInit {

 
  reponse : any ={};
  form : FormGroup;
  message : any;
  datas : any = [
    {"idData" : "1","nomData":"Facebook"},
    {"idData" : "2","nomData":"Instagram"},
    {"idData" : "3","nomData":"Internet"},
    {"idData" : "4","nomData":"What's App"},
  ]
  constructor(private action_service : ActionService, private utils_service: UtilsService,
     private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.toFormGroup() ;
  }

 
  toFormGroup() {
    const group: any = {};
    group["date"] = new FormControl();
    group["heure"] = new FormControl();
    group["iddata"]= new FormControl(this.datas[0].idData);
    group["quantite"]= new FormControl("",[Validators.required,Validators.min(0)]);
    this.form = new FormGroup(group);
  }

  fillFromForm() : void {
    let date = this.configDate(this.form.get("date")?.value);
    let heure = this.configHeure(this.form.get("heure")?.value);
    let dateconsommation = date +" "+ heure;
    this.reponse["dateconsommation"] = dateconsommation;
    this.reponse["iddata"]  =this.form.get("iddata")?.value;
    this.reponse["quantite"]  =this.form.get("quantite")?.value;
  }

  consommer(){
    const success = data =>{
      if(data.status == 200){
        this.message = data.message;
        console.log(data.data);
      }
      this.utils_service.redirect(data,401,"/",this.router);
     }

    const error = data =>{
      this.message = data.error.message;
      this.utils_service.redirect(data,401,"/",this.router);
    }
    this.fillFromForm();
    console.log(this.reponse);
    this.action_service.consommer(this.reponse).subscribe(success, error);
  }

  configDate(date : any){
    if(date == null){
      let d = new Date();
      return this.utils_service.dateToString(d);
    }else{
      return date;
    }
  }
  configHeure(heure : any){
    if(heure == null){
      return "00:00:00";
    }else{
      return heure+":00";
    }
  }


}
