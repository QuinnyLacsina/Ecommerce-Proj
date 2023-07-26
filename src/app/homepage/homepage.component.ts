import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}