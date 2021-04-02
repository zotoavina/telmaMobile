import { Router } from '@angular/router';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form : FormGroup;
  reponse : any ={};
  message : any;

  private _numero : any;
  private _mdp : any;

  get numero(){
    return this.form.get("numero");
  }

  get mdp(){
    return this.form.get("mdp");
  }



  constructor(private utils_service : UtilsService, private login_service : LoginService ,private router : Router){
    this.toFormGroup();
  }
    
  ngOnInit() {
  }
  
  toFormGroup() {
    const group: any = {};
    group["numero"]  = new FormControl("0348818232",[Validators.required,Validators.pattern("^[0-9]*$")]);
    group["mdp"]  = new FormControl("123456",Validators.required);
    this.form = new FormGroup(group);
  }

  fillFromForm() : void {
    this.reponse["numero"] = this.numero;
    this.reponse["mdp"]  = this.mdp;
  }

  connexion(){
    const success = data =>{
      console.log(data);
      if(data.data !== null){
        this.utils_service.setTokenValue(data.data);
        console.log(data.data);
        this.router.navigate(['/compte']);
      }
      this.message = data.message;
     }

    const error = data =>{
      console.log(data);
      this.message = data.error.message;
    }
    this.fillFromForm();
    this.login_service.login(this.reponse).subscribe(success, error);
  }

}
