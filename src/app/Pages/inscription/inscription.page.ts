import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  form : FormGroup;
  reponse : any ={};
  message : any;

  constructor(private utils_service : UtilsService, private login_service : LoginService ){
    this.toFormGroup();
  }
    
  ngOnInit() {
  }
  
  toFormGroup() {
    const group: any = {};
    group["nom"]      = new FormControl("",Validators.required);
    group["prenom"]  = new FormControl("");
    group["numero"]   = new FormControl("",Validators.required);
    group["mdp"]      = new FormControl("",Validators.required);
    this.form = new FormGroup(group);
  }

  fillFromForm() : void {
    this.reponse["nom"] = this.form.get("nom")?.value;
    this.reponse["prenom"]  = this.form.get("prenom")?.value;
    this.reponse["numero"] = this.form.get("numero")?.value;
    this.reponse["mdp"]  = this.form.get("mdp")?.value;
  }

  inscription(){
    const success = data =>{
      console.log(data);
      if(data.data !== null){
        this.utils_service.setTokenValue(data.data);
        console.log(data.data);
        // this.router.navigate(['/offre']);
      }
      this.message = data.message;
     }

    const error = data =>{
      console.log(data);
      this.message = data.error.message;
    }
    this.fillFromForm();
    this.login_service.inscription(this.reponse).subscribe(success, error);
  }


}
