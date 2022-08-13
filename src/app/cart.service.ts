import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shoes } from './shoes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
shoeParts: any[] =[];

addToCart(product: Shoes){
  this.shoeParts.push(product);
  console.log(this.shoeParts);
}

getItems(){
  return this.shoeParts;
}

clearCart(){
  this.shoeParts = [];
  return this.shoeParts;
}
getShippingPrices() {
  return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
}
  constructor(private http: HttpClient) { }
}
