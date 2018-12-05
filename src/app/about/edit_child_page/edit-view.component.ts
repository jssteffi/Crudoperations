import { Component, OnInit, ViewChild } from '@angular/core';
import { AboutComponent } from '../about.component';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ElementRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../add_child_page/add.service';

// jQuery Sign $
declare let $: any;

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit {

  routes: any;
  Email: any;
  LastName: any;
  FirstName: any;
  PhoneNo: any;

  itemCount: any;
  add_showHide:boolean;
  showHide:boolean;
  form: FormGroup;
  Addbtn : any;
  Add_new : any;
  edit_new : any;
  delete_new : any;
  inputaddbtn : any;
  inputadd_new : any;
  details: any;
  user:any;
  id:any;
  data:any;
  response: any;

  Add = false;
  success:boolean=false;
  fail:boolean=false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private loginservice: LoginService, private activatedRoute: ActivatedRoute) {
    
    this.form = this.formBuilder.group({
      id: [null, Validators.required],
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      PhoneNo: [null, Validators.required],
      Email: [null, [Validators.required, Validators.email]]
    });

   }
   @ViewChild('modal') modal:ElementRef;
   ngOnInit() {
   
    let id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    this.loginservice.getData_edit(id).subscribe((res) =>{
       this.form.setValue(res);
    });
  }

  borderStyle = '1px solid black';  
  appStyleGreen = {  
    'color': 'green',  
    'font-weight': 'bold',  
    'font-size': '18px',  
    'borderBottom': this.borderStyle,  
    'padding': '1rem'  
  }; 
  
  onSubmit(): void {
    console.log(this.form.value);
    //this.submitted = true;
   let user = {
        'id' : this.form.controls.id.value,
        'FirstName' : this.form.controls.FirstName.value,
        'LastName':this.form.controls.LastName.value ,
        'PhoneNo' :this.form.controls.PhoneNo.value ,
        'Email' : this.form.controls.Email.value
   }

   if (this.form.valid && this.form.value) {
      console.log('form submitted');
      
      this.loginservice.putUpdateMethod(this.form.value).subscribe(response => { 
        this.response = response;
        $(this.modal.nativeElement).modal('show');
       // this.router.navigate(['/about']);
      });
    };
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
