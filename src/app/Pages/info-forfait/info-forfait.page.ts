
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OffreService } from '../../services/offre.service';

@Component({
  selector: 'app-info-forfait',
  templateUrl: './info-forfait.page.html',
  styleUrls: ['./info-forfait.page.scss'],
})
export class InfoForfaitPage implements OnInit {

  idForfait : any;
  forfait : any;
  
  constructor(private offre_service : OffreService, private route : ActivatedRoute){}
  ngOnInit() {
    this.idForfait = this.route.snapshot.paramMap.get("id");
    this.getForfait();
  }

  

  getForfait(){
    const success = data => {
      console.log(data);
      if(data.status == 200){
        this.forfait = data.data;
      }
  }

  const error = data => {
      console.log(data);
  }
  this.offre_service.getForfait(this.idForfait).subscribe(success, error);
  }

}
