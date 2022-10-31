import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { products } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  @Input() products:any;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  
}   
