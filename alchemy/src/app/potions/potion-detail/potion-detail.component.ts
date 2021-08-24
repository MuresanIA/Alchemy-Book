import { Component, Input, OnInit, Output } from '@angular/core';
import { PotionModel } from '../potion.model';

@Component({
  selector: 'app-potion-detail',
  templateUrl: './potion-detail.component.html',
  styleUrls: ['./potion-detail.component.css']
})
export class PotionDetailComponent implements OnInit {
  @Input()
  potion: PotionModel;


  constructor() { }

  ngOnInit(): void {
  }
}

