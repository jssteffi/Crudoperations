import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './user';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  //Gender list for the select control element
  private genderList: string[];
  //Property for the user
  private user:User;
  signupForm: FormGroup; // Declare the signupForm 
 
    //Inject the formbuilder into the constructor
    constructor(private fb:FormBuilder) {}

    get email() { return this.signupForm.get('email'); }
     
    get password() { return this.signupForm.get('password'); }
 
    //get gender() { return this.signupForm.get('gender'); }
 
    //get terms() { return this.signupForm.get('terms'); }

  ngOnInit() {
    this.genderList =  ['select', 'Male', 'Female', 'Others'];
   
    this.signupForm  = this.fb.group({
      email: ['',[Validators.required,
                  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: this.fb.group({
          pwd: ['', [Validators.required, 
                     Validators.minLength(8)]],
         // confirmPwd: ['', [Validators.required, Validators.minLength(8)]]
      }),
      //gender: ['', Validators.required],
      //terms: ['', Validators.requiredTrue]
    })
  }
  
  public onFormSubmit() {
      if(this.signupForm.valid) {
          this.user = this.signupForm.value;
          console.log(this.user);

          localStorage.setItem('parseUser', JSON.stringify(this.user));
          /* Any API call logic via services goes here */
         
      }
  }

}
