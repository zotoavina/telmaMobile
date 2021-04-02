import { base_url } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient, private utils : UtilsService) { }

  faireAction( action : any ) : Observable<any> {
    let url = "api/clients/action";
    let option = this.utils.buildHeader();
    return this.http.post(base_url + url, action, option);
  }

  getClient() : Observable<any>{
    let url = "api/clients";
    let option = this.utils.buildHeader();
    return this.http.get(base_url + url, option);
  }



}
