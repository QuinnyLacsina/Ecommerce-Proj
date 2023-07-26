import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-peripherals',
  templateUrl: './peripherals.component.html',
  styleUrls: ['./peripherals.component.css'],
})
export class PeripheralsComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }
}
