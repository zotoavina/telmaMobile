import { base_url } from './../../environments/environment';
import { UtilsService } from './utils.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient,private utils : UtilsService) { }

  getDataActuel() : Observable<any>{
    let url = "api/clients/datas";
    let option = this.utils.buildHeader();
    return this.http.get(base_url + url, option);
  }
  
}
