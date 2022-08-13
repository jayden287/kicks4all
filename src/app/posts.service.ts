import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Shoes } from './shoes';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url: string = "http://localhost:3000/api/shoes";
  shoes: any[] = [];

  constructor(private http:HttpClient) { }

  getAllShoes() {
    return this.http.get<any[]>(this.url).pipe(map(response => {
      if (response){
        return Object.values(response);
      }
      return [];
    }));
  }
  insertShoe(newid: number, name: string, colour: string,  newprice: number, newstock: number, image: string, image1: string, brand: string, cutting: string, description: string) {
    return this.http.post<any[]>(this.url, {'id': newid, 'name': name, 'colour': colour, 'price': newprice, 'inStock': newstock, 'image':image, 'image1': image1, 'brand': brand, 'cutting': cutting, 'description': description });
    }
    //perform HTTP delete request to /api/shoes
deleteShoe(id: number) {
  return this.http.delete<any[]>(this.url + "/" + id);
  }
  getShoeById(id: number){
    return this.http.get<any[]>(this.url + "/" +id)
  }
  //perform HTTP put request to /api/shoes/_id
updateShoe(id: number, name: string, colour: string, newprice: number, newstock: number, image: string, image1: string, brand: string, cutting: string, description: string) {
  return this.http.put<any[]>(this.url + "/" + id, {'id': id, 'name': name, 'colour': colour, 'price': newprice, 'inStock': newstock, 'image':image, 'image1': image1, 'brand': brand, 'cutting': cutting, 'description': description });
  }

 
}

