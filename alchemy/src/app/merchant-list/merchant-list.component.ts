import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.css']
})
export class MerchantListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel(
      'Blue Mountain Flower',
      1
    ),
    new IngredientModel(
      'Butterfly Wing',
      2
    ),
    new IngredientModel(
      'Imp Stool',
      1
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
