import { Component, OnInit, Input } from '@angular/core';
import { CosmonautsService } from './cosmonauts.service'


@Component({
  selector: 'app-cosmonauts',
  templateUrl: './cosmonauts.component.html',
  styleUrls: ['./cosmonauts.component.scss']
})
export class CosmonautsComponent implements OnInit {

  constructor(private service: CosmonautsService) { }
  
  ngOnInit() {
    this.service.getHeaders();
    this.service.getCosmonauts();
  }

}
