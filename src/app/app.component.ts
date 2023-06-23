import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  //Komponent bu isim ile cagrilir
  selector: 'app-root',

  //HTML YAPISI BU DOSYADA YAPILIR
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  //DEGISKENLER BURADA YAPILIR - Global degiskendir
  title = 'cards-book';

//Bu degiskenlere fonksiyon icerisinde this.title olarak erisilir.
}
