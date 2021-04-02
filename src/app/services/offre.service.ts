import { base_url } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http : HttpClient, private utils : UtilsService) { }

  listOffres(): Observable<any>{
    let url = "offres";
    return this.http.get(base_url + url); 
  }

  getOffre(idOffre): Observable<any>{
    return this.http.get(base_url + "offres/" + idOffre );
  } 

  forfaitsOffre(idOffre) : Observable<any>{
    let url = "offres/" + idOffre + "/forfaits";
    return this.http.get(base_url + url);
  }

  getForfait(idForfait): Observable<any>{
    let url = "forfaits/" + idForfait;
    return this.http.get(base_url + url);
  }

}
