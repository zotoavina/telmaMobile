import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  compte : any;
  message : any;
  constructor(private utils_service : UtilsService, private router : Router,private client_service : ClientService) { }

  ngOnInit() {
    this.monCompte();
  }

  monCompte(){
    this.utils_service.isConnected(this.router);
    const success = data =>{
      console.log(data);
      if(data.data !== null){
        this.compte = data.data;
        console.log(data.data);
      }
      this.message = data.message;
     }

    const error = data =>{
      console.log(data);
      this.message = data.error.message;
    }
    this.client_service.getClient().subscribe(success, error);
  }

}
