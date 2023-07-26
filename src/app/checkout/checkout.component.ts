import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CheckoutService } from '../checkout.service';
import { checkout } from '../checkout';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  items = this.checkoutService.getItems();
  totalPrice: number= 0;
  checkoutForm:FormGroup;
  
  checkout = [...checkout];

  constructor(
    private checkoutService: CheckoutService,
    private formBuilder: FormBuilder
  ) {this.checkoutForm = this.formBuilder.group({
    firstname: ['', Validators.required], 
    lastname: ['', Validators.required],
    address: ['', Validators.required], 
    email: ['', Validators.required], 
  });}

  onSubmit(): void {
    
    this.items = this.checkoutService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    console.log(this.checkoutForm);
    this.checkoutForm.reset();
    this.totalPrice = 0;
  }

  onDelete(): void {
    this.items = this.checkoutService.clearCart();
    this.totalPrice = 0;
  }
  
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.checkoutService.getShippingPrices();
    this.totalPrice = this.items.reduce((acc, curr) => acc + curr.price, 0);
  }
}
