import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http : HttpClient) { }
    authKey:any = "da85fae5b1ef4326acfde741a4219439"  
  
    getInfo() {
    console.log(this.authKey);
    return this._http.get('https://proapi.whitepages.com/3.0/phone?phone=6195814158&api_key=' + this.authKey );
  }
}
