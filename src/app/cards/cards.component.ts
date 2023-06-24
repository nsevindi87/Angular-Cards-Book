import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CardModalComponent} from './card-modal/card-modal.component';


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
  constructor(
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
  }

  openAddCardModal(){
    this.dialog.open(CardModalComponent)
  }
}
