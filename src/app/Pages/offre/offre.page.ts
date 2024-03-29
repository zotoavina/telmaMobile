import { Router } from '@angular/router';
import { OffreService } from './../../services/offre.service';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.page.html',
  styleUrls: ['./offre.page.scss'],
})
export class OffrePage implements OnInit {

  offres : any;
  message : any;
  constructor(private offre : OffreService, private utils_service : UtilsService, private router : Router) { }

  ngOnInit() {
    this.listOffres();
  }

  listOffres(){
    const success = data => {
        if(data.status == 200){
          this.offres = data.data;
        }
        this.message = data.message;
    }

    const error = data => {
        this.message = data.error.message;
    }
    this.offre.listOffres().subscribe(success, error);
  }

  



}
