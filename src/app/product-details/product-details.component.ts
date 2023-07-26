import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CheckoutService } from '../checkout.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products: Product[] = products;

  
  /*products = [...products];*/
  
  constructor(
    private route: ActivatedRoute,
    private checkoutService: CheckoutService
  ) {}
  
  ngOnInit() {
   
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    
    this.products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.checkoutService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
