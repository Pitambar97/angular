import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{FirstServiceService} from '../../../Service/first-service.service';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
 public data:any;
 title:string;
 demo:string;
 imageUrl:string;
 price:number;
  constructor(private service:FirstServiceService,private router:Router) { 
    this.data=this.service.productList;
  }
  addCart(arg){
    this.service.cart.push(arg);
    console.log(arg);
   }
  ngOnInit() {
  }
  
  handelNavigate(arg){
    this.router.navigate(['/product-items',arg])
  }
}
