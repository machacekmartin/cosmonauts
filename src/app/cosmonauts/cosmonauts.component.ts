import { Component, OnInit, Input } from '@angular/core';
import { CosmonautsService } from './cosmonauts.service'


@Component({
  selector: 'app-cosmonauts',
  templateUrl: './cosmonauts.component.html',
  styleUrls: ['./cosmonauts.component.scss']
})
export class CosmonautsComponent implements OnInit {

  constructor(public service: CosmonautsService) { }
  
  // This is needed for the table data
  // just calls the GET functions from the service, accessing firebase
  ngOnInit() {
    this.service.getHeaders();
    this.service.getCosmonauts();
  }

}
