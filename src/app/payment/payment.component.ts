import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Shoes } from '../shoes';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  title = 'kicks4all';
  shoeParts: Shoes[] = [];
  constructor(private cartService: CartService) {   this.shoeParts = this.cartService.getItems();}

  ngOnInit(): void {
  }

}
