import { Component,OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService){}

  foodData: any;

  ngOnInit(): void{
    this.foodData = this.service.foodDetails;
  }
}

/* VERI CEKMEK ICIN */
/* 
1- Servici import et
2- classa ve importa OnInit implement et
3- constructor icinde servisi degiskene ata
4- foodData isimli degisken ata
5- ngOnInit icinde foodData degiskenine servisteki arrayi ata
ngOnInit component ilk baslatildiginda islem yapar
*/