import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  title = 'kicks4all';
  shoeParts: any = [];

  constructor(private cartService: CartService,private postsService: PostsService,) { 
       this.shoeParts = this.cartService.getItems();
  }

  ngOnInit(): void {
  }


}
