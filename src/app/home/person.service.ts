import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable()
export class PersonService {
  
  PERSONS = [
     new Person(101, 'Mahesh', 25),
     new Person(102, 'Ram', 20),  
     new Person(103, 'Krishna', 30),
     new Person(104, 'Bharat', 25)   
  ];	
  
  getAllPersons(): Observable<Person[]>  {
     return Observable.of(this.PERSONS);
  }

  add(name: string, age: number) {
    
    console.log(name,age);
    let maxIndex = this.PERSONS.length - 1;
    let objWithMaxIndex = this.PERSONS[maxIndex];
    let newId = objWithMaxIndex.personId + 1;		
    
    this.PERSONS.push(new Person(newId, name, age));

  }   

  remove(personId: number) {
    let obj = this.PERSONS.find(ob => ob.personId === personId);
    this.PERSONS.splice(this.PERSONS.indexOf(obj), 1);
  } 	
  
} 