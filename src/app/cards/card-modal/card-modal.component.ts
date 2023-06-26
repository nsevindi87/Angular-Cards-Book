import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent {
  cardForm!:FormGroup
  constructor(
   private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.cardForm=this.fb.group({
      title:['', Validators.required],
      name:'',
      phone:'',
      email:'',
      address:''
    })
  }
}
