import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({

  //Kullanilan komponentler import edildikten sonra buraya tanimlanir
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent
  ],


  imports: [
    BrowserModule
  ],
  providers: [],

  //Program baslayinca ilk buraya bakar
  bootstrap: [AppComponent]
})
export class AppModule { }
