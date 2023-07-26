import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent  {

  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  
}