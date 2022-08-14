import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { myUser } from './authenication/myUser';
 

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  url: string = "http://localhost:3000/api/users";
  myUser: any[] = [];

  constructor(private http:HttpClient ) {}
  getAllUsers(){
    return this.http.get<any[]>(this.url)
  }
  addUsers(name: string, password: any, role: string){
    return this.http.post<any[]>(this.url, {'name': name, 'password': password, 'role': role})
  }

}
