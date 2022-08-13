import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostsService } from '../posts.service';



@Component({
  selector: 'app-white',
  templateUrl: './white.component.html',
  styleUrls: ['./white.component.css']
})
export class WhiteComponent implements OnInit{  
  searchText: any;
  shoes: any=[];
  myForm: FormGroup;

  constructor(private postsService: PostsService, private fb: FormBuilder ) {
    this.retrieveAll();
  
   }
  ngOnInit() {
    this.myForm = this.fb.group({
      id: '',
    name: '',
    colour: '',
    price: '',
    inStock: '',
    image: '',
    image1: '',
    brand: '',
    cutting: '',
    description: '',
    });
    }
    onSubmit(){
      this.postsService.insertShoe(this.myForm.value.id,this.myForm.value.name,
      this.myForm.value.colour,  this.myForm.value.price, this.myForm.value.inStock, this.myForm.value.image, this.myForm.value.image1, this.myForm.value.brand, this.myForm.value.cutting, this.myForm.value.description).subscribe(results => {
      location.reload();
      });
      }
      retrieveAll(){
        this.postsService.getAllShoes().subscribe(shoes => {
          this.shoes = shoes;
          });
      }
      deleteShoe(_id: number) {
        this.postsService.deleteShoe(_id).subscribe(results => {
          location.reload();
        });
      }
       // Update function
       updateShoe(_id: number) {
        var name = (document.getElementById(_id+'_name') as
        HTMLInputElement).value;
        var colour = (document.getElementById(_id+'_colour') as
        HTMLInputElement).value;
   
        var price = (document.getElementById(_id+'_price') as
        HTMLInputElement).value;
        var inStock = (document.getElementById(_id+'_inStock') as
        HTMLInputElement).value;
        var image = (document.getElementById(_id+'_image') as
        HTMLInputElement).value;
        var image1 = (document.getElementById(_id+'_image1') as
        HTMLInputElement).value;
        var brand = (document.getElementById(_id+'_brand') as
        HTMLInputElement).value;
        var cutting = (document.getElementById(_id+'_cutting') as
        HTMLInputElement).value;
        var description = (document.getElementById(_id+'_description') as
        HTMLInputElement).value;
      
        this.postsService.updateShoe(_id, name, colour, parseInt(price), parseInt(inStock), image, image1, brand,cutting,description
        ).subscribe(results => {
        location.reload();
        });
   
  }
  findWhite(shoePart: any): any {
    return shoePart.colour == 'White';
  }
}
