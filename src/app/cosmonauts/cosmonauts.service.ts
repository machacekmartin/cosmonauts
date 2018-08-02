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

  // Calls firebase for headers and then gives it to local array headers
  getHeaders() {
    return this.db.list('/headers').valueChanges()
      .subscribe(headers => {
        this.headers = headers;
      })
  }

  // Calls firebase for list of object (people) and then gives it to local array people
  getCosmonauts() {
    return this.db.list('/people').valueChanges()
      .subscribe(people => {
        this.people = people;
      })
  }

  // Adds a person into the firebase, by collecting values 
  // these values are from add-cosmonaut component FORM
  // then, it creates a blank person (object) and assigns firebases generated ID to an ID parameter of the person
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

  // Removes a person from firebase by filtering a list of objects in firebase/people
  // then it matches a person (object) with given ID, which comes from the html click
  removeCosmonaut(id) {
    return this.db.list('/people/').remove(id)
      .then(success => console.log("You've just deleted a cosmonaut"));
  }

  // Edits a person in firebase by again matching an object in given list of objects
  // and then updates information with an object data from an EDIT FORM
  editCosmonaut(id, object) {
    return this.db.list('/people/').update(id, object)
  }

  // Opens a modal window thanks to a bootstrap module for modules
  // also, every time you open a module, it is matches with a person you opened that module for
  openModal(id, modalWindow) {
    this.personID = id;
    return this.modal.open(modalWindow);
  }

  // This function prefills the edit form, by firstly, deleting the previous object for preffiling
  // it deletes it because when you edit a person it assigns the personForEdit object ---
  // then, you delete it, and when you click on edit on a different person, the prefilled html inputs would
  // be trying to access the old deleted object for a little while. (throws an error for html ngModel without it)
  // AFTER it clears the prefilling object, it assigns it with a person you clicked "edit" on, by, again, ID from html click
  preFillForm(id) {
    this.personForEdit = { firstname: "", lastname: "", birthdate: "", superpower: "" };
    return this.db.object('/people/' + id).valueChanges()
      .subscribe(person => {
        this.personForEdit = person;
      })

  }

}
