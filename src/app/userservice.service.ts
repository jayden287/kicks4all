import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { myUser } from './authenication/myUser';
 

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  url: string = "http://localhost:3000/api/users";
  private listOfUsers: myUser[]

  constructor(private http:HttpClient ) {}
  getAllUsers(){
    return this.http.get<any[]>(this.url)
  }

}
