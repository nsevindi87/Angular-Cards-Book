import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CardModalComponent} from './card-modal/card-modal.component';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

 
  constructor(
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
  }

  openAddCardModal():void {
    this.dialog.open(CardModalComponent, {
      width:"400px"
    })
  }
}
