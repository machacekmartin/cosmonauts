import { Component} from '@angular/core';

@Component({
  selector: 'copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent{

  footerText ="Cosmonauts' Records | Copyright 2018";

  constructor() { }
}
