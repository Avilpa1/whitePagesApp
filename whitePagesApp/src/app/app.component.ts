import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public _api : ApiService ){ }
  title = 'whitePagesApp';
  results: any;
  search: any
  
  
  getData() {
    this._api.getInfo()
    .subscribe(
      (response) =>  {
        this.results = response
        console.log(response)
      })
  }
}
