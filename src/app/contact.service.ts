import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listOfContacts } from './contact/mock-contact';
import { myContact } from './contact/myContact';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url: string = "http://localhost:3000/api/contacts";

  constructor(private http:HttpClient) { }



  insertContact(name, email, subject) {
    return this.http.post<any[]>(this.url, {'name': name, 'email': email, 'subject': subject });
    }
    //perform HTTP delete request to /api/shoes

    getContact() {
      return this.http.get<any[]>(this.url).pipe(map(response => {
        if (response){
          return Object.values(response);
        }
        return [];
      }));
    }
    deleteContact(id: number) {
      return this.http.delete<any[]>(this.url + "/" + id);
      }
}
