import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css'],
})
export class LaptopsComponent {
  
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  
}
