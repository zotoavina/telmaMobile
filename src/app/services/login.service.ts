import { UtilsService } from './utils.service';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { base_url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient, private utils : UtilsService) { }

  login( client : any) : Observable<any>{
    let url = "api/clients/login";
    return this.http.post( base_url + url, client);
  } 

  inscription( client: any ) : Observable<any>{
    let url = "api/clients";
    return this.http.post( base_url + url , client);
  }

}