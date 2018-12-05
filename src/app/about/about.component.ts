import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl} from '@angular/forms';
import { SlideInOutAnimation } from './animation';
import { ElementRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ReturnsJsonArrayService } from './json-arrayservices';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddviewComponent } from './add_child_page/add_view.component';
import { Router } from '@angular/router';
import { LoginService } from './add_child_page/add.service';

// jQuery Sign $
declare let $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [SlideInOutAnimation],
  providers: [ReturnsJsonArrayService]
})
export class AboutComponent implements OnInit {
  user: any;
  getData(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  LastName: any;
  FirstName: any;
  PhoneNo:any;
  Email:any;
  details: any;
  users = null;
  showHide:boolean;
  searchableList : any;
  
  //sorting
    key: string = 'id';
    reverse: boolean = false;
    sort(key){
      this.key = key;
      this.reverse = !this.reverse;
    }
  
    constructor(private http: HttpClient, private router: Router, private loginservice: LoginService){
     
      this.loginservice.getData().subscribe((res) =>{
        this.details = res;
        
      })

      this.searchableList = ['id','firstname','lastname','phoneno']
      this.showHide = false;
    };

    @ViewChild('modal') modal:ElementRef;
    id: any;
    data: any = [];
    delRow;
   
    detail:any;
    showModal(id,detail):void{
      this.id = id;
      $(this.modal.nativeElement).modal('show');
    } 
    
    delete(detail):void{
      this.loginservice.deleteUser(this.id).subscribe((res) =>{
         console.log("user deleted");  
            this.loginservice.getData().subscribe((res) =>{
             this.details = res;
          
          })
      })
    }
    edit(detail):void
    {
        let user = {
           'id' : this.id,
           'FirstName' : this.FirstName,
           'LastName': this.LastName,
           'PhoneNo' : this.PhoneNo,
           'Email' : this.Email
       }
      console.log(detail);
     
    }
    ngOnInit() {
    }

    
    reset() {
      this.ngOnInit();
    }
}

