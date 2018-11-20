import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http : HttpClient) { }
    reverseNumKey:any = "950c3c74cd0d475a884441e6f0192f05"  
    search:any
    results: any;
    key
    value
    response:any
    e
    
    getInfo() {
    console.log(this.search)
    console.log(this.reverseNumKey);
    console.log('https://proapi.whitepages.com/3.0/phone?phone=' + this.search + '&api_key=' + this.reverseNumKey)
    return this._http.get('https://proapi.whitepages.com/3.0/phone?phone=' + this.search + '&api_key=' + this.reverseNumKey );
    
    // return this._http.get('https://proapi.whitepages.com/3.0/phone?phone=6195814158&api_key=' + this.reverseNumKey );
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
  
    scroll() {
    var elmnt = document.getElementsByTagName("html")[0].scrollTop;
    var y = elmnt
    console.log(y)
    
    if (y > 20) {
      this.e = document.getElementsByClassName('navBar');
      console.log(this.e)
      this.e.style.boxShadow = (this.e.style.boxShadow == '0 5px 10px rgba(0,0,0,0.1)') ? 'none' : '0 5px 10px rgba(0,0,0,0.1)';
      
    }
    
  }  
  
}