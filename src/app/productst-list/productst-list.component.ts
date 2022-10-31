import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-productst-list',
  templateUrl: './productst-list.component.html',
  styleUrls: ['./productst-list.component.scss']
})
export class ProductstListComponent implements OnInit {
  products=products
  constructor() { }

  ngOnInit(): void {
  }

 


share(name:any){
alert(`${name} is shared`)
}
onNotify() {
  window.alert('You will be notified when the product goes on sale');
}
}
