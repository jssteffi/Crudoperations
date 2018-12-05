import { Component, OnInit } from '@angular/core';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { User } from '../signup-page/user';
import { LoginService } from '../about/add_child_page/add.service';
import { QuantityService } from './quantity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [QuantityService]
})
export class HomeComponent implements OnInit {

  users: any;
  
  
  constructor(private loginservice: LoginService, private quan: QuantityService) { 
    
    this.loginservice.getData_User().subscribe((res) =>{
    this.users = res;
    });
  }

  ngOnInit() {
   
  }
  
  add(name){
      this.loginservice.insertData_User(name).subscribe(data =>
          {
            this.loginservice.getData_User().subscribe((res) =>{
            this.users = res;
          })
        }
      );
  }

  quant(quan)
  {
      this.quan.quan(quan);
  }
}
