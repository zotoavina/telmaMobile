import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form : FormGroup;
  reponse : any ={};

  constructor(){
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

  connexion(){}

}
