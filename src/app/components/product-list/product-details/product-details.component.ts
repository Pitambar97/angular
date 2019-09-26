import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {data} from '../../../Service/product-list';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public list;

  constructor(private route:ActivatedRoute) { 

    const params=this.route.snapshot.params['dynamic']
    alert(params);
      this.list =data.find(el=>el.title==params);
     
    
  }

  ngOnInit() {
  }

}
