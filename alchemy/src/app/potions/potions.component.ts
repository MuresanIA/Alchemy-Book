import { Component, OnInit } from '@angular/core';
import { PotionModel } from './potion.model';

@Component({
  selector: 'app-potions',
  templateUrl: './potions.component.html',
  styleUrls: ['./potions.component.css']
})
export class PotionsComponent implements OnInit {
  selectedPotion: PotionModel;

  constructor() { }

  ngOnInit(): void {
  }

}

