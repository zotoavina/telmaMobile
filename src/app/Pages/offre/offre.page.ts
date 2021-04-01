import { OffreService } from './../../services/offre.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.page.html',
  styleUrls: ['./offre.page.scss'],
})
export class OffrePage implements OnInit {
  offres : any;
  message : any;
  constructor(private offre : OffreService) { }

  ngOnInit() {
  }

  listOffres(){
    const success = data => {
        console.log(data);
        if(data.status == 200){
          this.offres = data.data;
        }
        this.message = data.message;
    }

    const error = data => {
        console.log(data);
        this.message = data.error.message;
    }
    this.offre.listOffres().subscribe(success, error);
  }

  



}
