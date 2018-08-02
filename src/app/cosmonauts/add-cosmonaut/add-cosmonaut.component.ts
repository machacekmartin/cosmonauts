import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CosmonautsService } from '../cosmonauts.service';

@Component({
  selector: 'add-cosmonaut',
  templateUrl: './add-cosmonaut.component.html',
  styleUrls: ['./add-cosmonaut.component.scss']
})
export class AddCosmonautComponent {

  constructor(private modal: NgbModal, public service: CosmonautsService) { }

  openAddModal(modalWindow) {
    return this.modal.open(modalWindow);
  }

}
