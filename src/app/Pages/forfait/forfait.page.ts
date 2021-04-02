import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OffreService } from '../../services/offre.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.page.html',
  styleUrls: ['./forfait.page.scss'],
})
export class ForfaitPage implements OnInit {

  idOffre : any;
  forfaits : any;
  message : any;
  offre : any;

  constructor(private offre_service : OffreService, private route : ActivatedRoute, 
    private utils_service:UtilsService, private router : Router) { }

  ngOnInit() {
    this.idOffre = this.route.snapshot.paramMap.get("id");
    this.getOffre();
    this.listForfaits();
  }

  listForfaits(){
    const success = data => {
        console.log(data);
        if(data.status == 200){
          this.forfaits = data.data;
        }
        this.message = data.message;
    }

    const error = data => {
        console.log(data);
        this.message = data.error.message;
    }
    this.offre_service.forfaitsOffre(this.idOffre).subscribe(success, error);
  }

  getOffre(){
    const success = data => {
      console.log(data);
      if(data.status == 200){
        this.offre = data.data;
      }
      this.message = data.message;
  }

  const error = data => {
      console.log(data);
      this.message = data.error.message;
  }
  this.offre_service.getOffre(this.idOffre).subscribe(success, error);
  }

}
