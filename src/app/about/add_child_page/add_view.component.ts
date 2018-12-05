import { Component, OnInit, ViewChild } from '@angular/core';
import { AboutComponent } from '../about.component';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ElementRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginService } from './add.service';

// jQuery Sign $
declare let $: any;

@Component({
  selector: 'app-edit',
  templateUrl: './add_view.component.html',
  styleUrls: ['./add_view.component.css','../about.component.css']
})
export class AddviewComponent implements OnInit {
  [x: string]: any;
  dataService: any;

  details: any;
  itemCount: any;
  add_showHide:boolean;
  showHide:boolean;
  form: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private loginservice: LoginService) { 
  }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [null, Validators.required],
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      PhoneNo: [null, Validators.required],
      Email: [null, [Validators.required, Validators.email]]
  });

  }
  applygreenstyle: boolean = true;  
  borderStyle = '1px solid black';  
  appStyleGreen = {  
      'color': 'green',  
      'font-weight': 'bold',  
      'font-size': '18px',  
      'borderBottom': this.borderStyle,  
      'padding': '1rem'  
  };  
  appStyleBlue = {  
      'color': 'blue',  
      'font-weight': 'bold',  
      'font-size': '18px',  
      'borderBottom': this.borderStyle,  
      'padding': '1rem'  
  }; 
  user:any;
  data:Object;
  loading: boolean;
  insertData: object;

  detail: Array<AboutComponent>;
  @ViewChild('modal') modal:ElementRef;
  
  
  onSubmit(): void {

    console.log(this.form.value);
  
    let user = {
        'id' : this.form.controls.id.value,
        'FirstName' : this.form.controls.FirstName.value,
        'LastName': this.form.controls.LastName.value,
        'PhoneNo' : this.form.controls.PhoneNo.value,
        'Email' : this.form.controls.Email.value
   }


   if (this.form.valid && this.form.value) {
      console.log('form submitted');
     
      this.loginservice.insertData(user).subscribe(data =>
          {
            this.loginservice.getData().subscribe((res) =>{
            this.details = res;
            $(this.modal.nativeElement).modal('show');
            this.isValid = true;
            this.applygreenstyle = !this.applygreenstyle;  
          })
        },
        error => {
           $(this.modal.nativeElement).modal('show');
           this.isValid = false;
           this.applygreenstyle = !this.applygreenstyle;  
        }
      );
      console.log(user);
      this.reset();
      
  } else {
      this.validateAllFormFields(this.form);
   }  
 }

 

   isFieldValid(field: string) {
    return (!this.form.get(field).valid && this.form.get(field).touched)
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
 
  reset() {
   this.ngOnInit();
  } 

 validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
     console.log(field);
     const control = formGroup.get(field);

     if (control instanceof FormControl) {
       control.markAsTouched({ onlySelf: true });
     } else if (control instanceof FormGroup) {
       this.validateAllFormFields(control);
     }

   });
 }

 


 
}
