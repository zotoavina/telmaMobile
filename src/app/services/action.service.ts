import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { base_url } from '../../environments/environment';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http : HttpClient, private utils : UtilsService) { }

   achatForfait(idForfait : any,reponse : any): Observable<any>{
      let url = "api/clients/forfaits/" + idForfait+"/achats";
      let options = this.utils.buildHeader();
      return this.http.post(base_url + url,reponse,options);
    }
  
}
  

