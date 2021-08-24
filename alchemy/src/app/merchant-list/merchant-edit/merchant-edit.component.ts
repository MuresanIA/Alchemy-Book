import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IngredientModel } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-merchant-edit',
  templateUrl: './merchant-edit.component.html',
  styleUrls: ['./merchant-edit.component.css']
})
export class MerchantEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

 @Output() ingredientAdded = new EventEmitter<IngredientModel>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;

    const newIngredient = new IngredientModel(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
    
  }
}
