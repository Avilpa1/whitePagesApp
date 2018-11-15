import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http : HttpClient) { }
    reverseNumKey:any = "da85fae5b1ef4326acfde741a4219439"  
    search:any
    results: any;
    key
    value
    response:any
    
    
    getInfo() {
    console.log(this.search)
    console.log(this.reverseNumKey);
    console.log('https://proapi.whitepages.com/3.0/phone?phone=' + this.search + '&api_key=' + this.reverseNumKey)
    // return this._http.get('https://proapi.whitepages.com/3.0/phone?phone=' + this.search + '&api_key=' + this.reverseNumKey );
    
    return this._http.get('https://proapi.whitepages.com/3.0/phone?phone=6195814158&api_key=' + this.reverseNumKey );
  }
  
    getData() {
    this.getInfo()
    .subscribe(
      (response) =>  {
        this.results = response
        console.log(this.search)
        console.log(response)
     
        
        
        for (let x=0; x < this.results.associated_people.length; x++) {
          console.log(this.results.associated_people[x].name)
        }

      
      
      })
  } 
  
  
}