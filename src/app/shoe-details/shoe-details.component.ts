import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import ActivatedRoute class into the component
import { ActivatedRoute } from '@angular/router'; 
import { CartService } from '../cart.service';
import { PostsService } from '../posts.service';
import { listOfShoes, Shoes } from '../shoes';
@Component({
  selector: 'app-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.css']
})
export class ShoeDetailsComponent implements OnInit {
  imageSrc = '';
  messageText = '';
  shoes: any[]= [];
  id: any;
  shoeParts: any;

  constructor(private route: ActivatedRoute, private httpCilent: HttpClient, private cartService: CartService, private postService: PostsService) {this.retrieveAll(); }
  //override our ngOnInit lifecycle hook function
  
  ngOnInit() {
   /* this.route.paramMap.subscribe(params =>{
      this.id = params.get('id');
    });
    this.getProductById(this.id);]*/
   
    const RouteParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(RouteParams.get('id'));
    this.retrieveAll();
    this.shoeParts = listOfShoes.find(shoeParts => shoeParts.id === productIdFromRoute);
    console.log(this.shoeParts);

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
  retrieveAll(){
    this.postService.getAllShoes().subscribe(shoes => {
      this.shoes = shoes;
      });
  }
  getProductById(id:any){
    this.postService.getShoeById(id).subscribe((res => {
      this.shoeParts = res;
    }))
  }
  changeImage(shoeParts: any) {
    var image = document.getElementById('image');
    image = shoeParts.image1;
  }
  
  }