import { Injectable, ViewChild } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class CosmonautsService {
  // Variables for declaring new cosmomnaut
  firstname = "";
  lastname = "";
  birthdate = "";
  superpower = "";
  // Loaded arrays from GETs
  people: any[];
  headers: any[];
  // personID is to make sure EDITs and DELETEs are for the right guy
  // personForEdit is an object which is filled with data upon clicking on edit or delete
  // mainly used for "pre-filling" of edit form.
  personID;
  personForEdit = {};

  constructor(public db: AngularFireDatabase, private modal: NgbModal) { }

  getHeaders() {
    return this.db.list('/headers').valueChanges()
      .subscribe(headers => {
        this.headers = headers;
      })
  }

  getCosmonauts() {
    return this.db.list('/people').valueChanges()
      .subscribe(people => {
        this.people = people;
      })
  }

  addCosmonaut(firstname, lastname, birthdate, superpower) {
    let person = this.db.list("/people/").push({});
    person.set({
      firstname: firstname,
      lastname: lastname,
      birthdate: birthdate,
      superpower: superpower,
      id: person.key,
    }).then(success => console.log("You've just added a cosmonaut"))
  }

  removeCosmonaut(id) {    
    return this.db.list('/people/').remove(id)
      .then(success => console.log("You've just deleted a cosmonaut"));
  }

  editCosmonaut(id, object) {
    return this.db.list('/people/').update(id, object)
  }

  openModal(id, modalWindow) {
    this.personID = id;
    return this.modal.open(modalWindow);
  }

  preFillForm(id){
    this.personForEdit = {firstname: "", lastname: "", birthdate:"", superpower: ""};
    return this.db.object('/people/'+ id).valueChanges()
    .subscribe(person => {
      this.personForEdit = person;
    })

  }

}
