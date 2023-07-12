import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './sharepages/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({

  //Kullanilan komponentler import edildikten sonra buraya tanimlanir
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [
    {
      provide:'apiUrl',
      useValue:'https://jsonplaceholder.typicode.com'
    }
  ],

  //Program baslayinca ilk buraya bakar
  bootstrap: [AppComponent]
})
export class AppModule { }
