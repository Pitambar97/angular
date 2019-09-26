import { Injectable } from '@angular/core';
import{data} from './product-list';
@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  productList= data;
  
  constructor() { }
  cart=[];
}
