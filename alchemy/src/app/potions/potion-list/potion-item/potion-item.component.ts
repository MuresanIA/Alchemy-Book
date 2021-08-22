import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PotionModel } from '../../potion.model';

@Component({
  selector: 'app-potion-item',
  templateUrl: './potion-item.component.html',
  styleUrls: ['./potion-item.component.css']
})
export class PotionItemComponent implements OnInit {
  @Input()
  potion: PotionModel;

  @Output() potionSelected = new EventEmitter <void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.potionSelected.emit();
  }

}
