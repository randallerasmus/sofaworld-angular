import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './SharedComponents/header/header.component';
import { FooterComponent } from './SharedComponents/footer/footer.component';
import { RoutingModule } from './routing/routing.module';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import {SidebarModule} from 'ng-sidebar';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { BlogComponent } from './modules/blog/blog.component';
import { LookbookComponent } from './modules/lookbook/lookbook.component';
import { AccessoriesComponent } from './modules/accessories/accessories.component';
import { PagesComponent } from './modules/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    BlogComponent,
    LookbookComponent,
    AccessoriesComponent,
    PagesComponent,
    ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
