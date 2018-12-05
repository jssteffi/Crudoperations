import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { FieldErrordisplayComponent } from './field-errordisplay/field-errordisplay.component';
import { ReturnsJsonArrayService } from './about/json-arrayservices';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AddviewComponent } from './about/add_child_page/add_view.component';
import { EditViewComponent } from './about/edit_child_page/edit-view.component';
import { PersonService } from './home/person.service';
import { LoginService } from './about/add_child_page/add.service';
import { OnlyNumber } from './about/add_child_page/onlynumber';
import { HighlightDirective } from './about/highlight.directive';

// import { Userservice } from './about/add_child_page/delete.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    FieldErrordisplayComponent,
    SignupPageComponent,
    AddviewComponent,
    EditViewComponent,
    OnlyNumber,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2OrderModule, //add here
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    HttpModule
   
  ],
  providers: [ReturnsJsonArrayService,PersonService,LoginService,OnlyNumber],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})  
export class AppModule {}
