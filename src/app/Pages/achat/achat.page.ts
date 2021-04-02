import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.page.html',
  styleUrls: ['./achat.page.scss'],
})
export class AchatPage implements OnInit {

  idForfait : any;
  reponse : any;
  form : FormGroup;
  
  constructor() { }

  ngOnInit() {
  }



  achatForfait(idForfait : any,reponse : any);

}
