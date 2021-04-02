import { DataService } from './../../services/data.service';
import { Router } from '@angular/router';
import { UtilsService } from './../../services/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {

  datas : any;
  message : any;
  constructor(private data_service: DataService, private utils_service : UtilsService,private router : Router) { }

  ngOnInit() {
    this.getDataActuel();
  }

  getDataActuel(){
      const success = data => {
          if(data.status == 200){
            this.datas = data.data;
          }
        this.utils_service.redirect(data,401,"/",this.router);
      }

    const error = data =>{
      this.message = data.error.message;
      this.utils_service.redirect(data,401,"/",this.router);
    }
    this.data_service.getDataActuel().subscribe(success, error);
  }

}
