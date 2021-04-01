import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form : FormGroup;
  reponse : any ={};
  message : any;

  constructor(private utils_service : UtilsService){
    this.toFormGroup();
  }
    
  ngOnInit() {
  }
  
  toFormGroup() {
    const group: any = {};
    group["numero"]  = new FormControl("0348818232",Validators.required);
    group["mdp"]  = new FormControl("123456",Validators.required);
    this.form = new FormGroup(group);
  }

  fillFromForm() : void {
    this.reponse["numero"] = this.form.get("numero")?.value;
    this.reponse["mdp"]  = this.form.get("mdp")?.value;
  }

  connexion(){
    const success = data =>{
      console.log(data);
      if(data.data !== null){
        this.utils_service.setTokenValue(data.data);
        // this.router.navigate(['/offre']);
      }
      this.message = data.message;
     }

    const error = data =>{
      console.log(data);
      this.message = data.error.message;
    }
    this.fillFromForm();
    this.login_service.login(this.reponse).subscribe(success, error);
    console.log(this.reponse);
  }

}
