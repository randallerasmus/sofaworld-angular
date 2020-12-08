import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../modules/home/home.component';
import {ContactComponent} from '../modules/contact/contact.component';
import {AboutUsComponent} from '../modules/about-us/about-us.component';
import {PagesComponent} from '../modules/pages/pages.component';
import {BlogComponent} from '../modules/blog/blog.component';
import {LookbookComponent} from '../modules/lookbook/lookbook.component';
import {AccessoriesComponent} from '../modules/accessories/accessories.component';
import {MainHeaderComponent} from '../main-header/main-header.component';


const routes: Routes = [
            { path: 'home', component: MainHeaderComponent},
            { path: '', redirectTo: '/home', pathMatch: 'full'},
            { path: 'accessories', component: AccessoriesComponent},
            { path: 'lookbook', component: LookbookComponent},
            { path: 'blog', component: BlogComponent},
            { path: 'pages', component: PagesComponent},
            { path: 'about-us', component: AboutUsComponent},
            { path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
