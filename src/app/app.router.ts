import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AddviewComponent } from './about/add_child_page/add_view.component';
import { EditViewComponent } from './about/edit_child_page/edit-view.component';


export const router: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'about/add_child_page', component: AddviewComponent },
    { path: 'about/edit_child_page/:id', component: EditViewComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);