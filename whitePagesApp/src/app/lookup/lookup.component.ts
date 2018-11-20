import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {

  constructor(public _api : ApiService, private wpService: ApiService, ){ }

  results: any;
  search: any

  ngOnInit() {
  }

}
