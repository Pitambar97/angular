import { Component, OnInit } from '@angular/core';
import{FirstServiceService} from '../../../Service/first-service.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  cart:any;
  constructor(private service:FirstServiceService) { }

  ngOnInit() {
    this.cart=this.service.cart;
  }

}
