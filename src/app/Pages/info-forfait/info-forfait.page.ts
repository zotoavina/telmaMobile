
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OffreService } from '../../services/offre.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-info-forfait',
  templateUrl: './info-forfait.page.html',
  styleUrls: ['./info-forfait.page.scss'],
})
export class InfoForfaitPage implements OnInit {

  idForfait : any;
  forfait : any;
  
  constructor(private offre_service : OffreService, private route : ActivatedRoute,private utils_service: UtilsService,private router : Router){}
  
  ngOnInit() {
    this.idForfait = this.route.snapshot.paramMap.get("id");
    this.getForfait();
  }

  

  getForfait(){
    const success = data => {
      if(data.status == 200){
        this.forfait = data.data;
      }
  }

  const error = data => {
  }
    this.offre_service.getForfait(this.idForfait).subscribe(success, error);
  }


}
