import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

  cardItem={
    name:"Nizami Sevindi",
    title:"Fullstack",
    phone: "077 999 88 99",
    email: "info@yasmin.com",
    adress: "Zurich - Switzerland"

  }
  constructor(){}

  ngOnInit(): void {
  }
}
