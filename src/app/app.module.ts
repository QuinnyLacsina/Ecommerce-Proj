import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { PeripheralsComponent } from './peripherals/peripherals.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'smartphones', component: SmartphonesComponent },
  { path: 'peripherals', component: PeripheralsComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule, 
  ],

  declarations: [
    AppComponent,
    LaptopsComponent,
    PeripheralsComponent,
    SmartphonesComponent,
    TopNavComponent,
    CheckoutComponent,
    HomepageComponent,
    
    ProductDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
