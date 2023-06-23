import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({

  //Kullanilan komponentler import edildikten sonra buraya tanimlanir
  declarations: [
    AppComponent
  ],


  imports: [
    BrowserModule
  ],
  providers: [],

  //Program baslayinca ilk buraya bakar
  bootstrap: [AppComponent]
})
export class AppModule { }
