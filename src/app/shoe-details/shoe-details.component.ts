import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import ActivatedRoute class into the component
import { ActivatedRoute } from '@angular/router'; 
import { CartService } from '../cart.service';
import { listOfShoes, Shoes } from '../shoes';
@Component({
  selector: 'app-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.css']
})
export class ShoeDetailsComponent implements OnInit {
  imageSrc = '';
  messageText = '';
  shoeParts: Shoes | undefined;
  constructor(private route: ActivatedRoute, private httpCilent: HttpClient, private cartService: CartService) { }
  //override our ngOnInit lifecycle hook function
  
  ngOnInit() {
    const RouteParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(RouteParams.get('id'));

    this.shoeParts = listOfShoes.find(shoeParts => shoeParts.id === productIdFromRoute);

  }
  onClick(imageNameObject) {
    this.imageSrc = imageNameObject.image;
  
  }
  addToCart(shoeParts: Shoes) {
    this.cartService.addToCart(shoeParts);
    window.alert('Your product has been added to the cart!');
    console.log(shoeParts)
  }
 public myfunction(message : string){
      alert(message);
  }
  changeImage(shoeParts: any) {
    var image = document.getElementById('image');
    image = shoeParts.image1;
  }
  
  }