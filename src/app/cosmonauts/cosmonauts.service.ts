import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CosmonautsService {
  //variables for declaring new cosmomnaut
  firstname="";
  lastname="";
  birthdate="";
  superpower="";
  // loaded array from GETs
  people: any[];
  headers: any[];
  
  constructor(public db: AngularFireDatabase) { }

  getHeaders() {
    return this.db.list('/headers').valueChanges()
    .subscribe(headers => {
      this.headers = headers;
      console.log(this.headers);
    })
  } 

  getCosmonauts() {
    return this.db.list('/people').valueChanges()
    .subscribe(people => {
      this.people = people;
      console.log(this.people);
    })
  } 
  
  createCosmonaut(firstname, lastname, birthdate, superpower) {
    let person= this.db.list("/people/").push({}); 
    person.set({
      firstname: firstname,
      lastname: lastname,
      birthdate: birthdate,
      superpower: superpower,
      id: person.key,
    })
  }
}
