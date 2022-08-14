import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  shoes:any = [];
 
  constructor(private _http: HttpClient, private postsService: PostsService) { }
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
  
    this.postsService.updateShoe( _id,name, colour,  parseInt(price), parseInt(inStock), image, image1, brand,cutting,description
    ).subscribe(results => {
    location.reload();
    });

}


 /* getShoes(): Shoes[]{
    return listOfShoes;
  }
  addShoe(item: Shoes): void{
    listOfShoes.push(item);
  }
  getDataById(id) {
    return this.shoeParts.find(x => x.id === id);
  }
  getDataText(id) {
    let findedData = this.shoeParts.find(i => i.id === id);
    if (typeof findedData === 'undefined') {
       return null;
    }
    return findedData;
} 
  updateShoe(id): void{
    const data = this.getDataById(id);
    console.log(data)
    let index = this.shoeParts.indexOf(data);
  
   // let index = listOfShoes.indexOf(item);
   // listOfShoes[index] = item;
  
    console.log(listOfShoes);
  }
  getProById(id:any){
    return this._http.get("http://localhost:3000/shoeDetails/" + id);
  }
*/
}
