import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  constructor(private utils_service : UtilsService, private router : Router) { }

  ngOnInit() {
  }

  monCompte(){
    this.utils_service.isConnected(this.router);
  }

}
