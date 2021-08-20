import { Component, OnInit } from '@angular/core';
import { PotionModel } from '../potion.model';

@Component({
  selector: 'app-potion-list',
  templateUrl: './potion-list.component.html',
  styleUrls: ['./potion-list.component.css']
})
export class PotionListComponent implements OnInit {
  potions: PotionModel[]= [
    new PotionModel (
      'Potion of Health',
      'Restores 65 points of HP',
      'https://cdn.dribbble.com/users/15748/screenshots/4430678/skyrim-healing-potion.png'
    ),
    new PotionModel (
      'Potion of Magicka',
      'Restores 70 points of magicka',
      'https://scontent.fclj1-2.fna.fbcdn.net/v/t1.6435-9/111001752_116104660190951_22403946800236699_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=uUBci_1dY7EAX8WIZcW&_nc_ht=scontent.fclj1-2.fna&oh=5779c21c9376b49ca02774ebddfacf25&oe=61455833'
    ),
    new PotionModel (
      'Potion of Stamina',
      'Restores 65 points of stamina',
      'https://www.pngkey.com/png/full/233-2338997_potion-of-ultimate-stamina-skyrim-stamina-potion.png'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
