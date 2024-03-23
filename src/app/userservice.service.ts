import { Injectable } from '@angular/core';
import { User } from './model/user'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users:User[]
  ApiLink:string;
  constructor( private httpclient:HttpClient) {
    this.ApiLink="http://127.0.0.1:8000/myapi/user/"
    this.users=[
      {id:1,Full_name:'Arjun',Email:'arjun@gmail.com',Password:'123'},
      {id:2,Full_name:'Abhi',Email:'abhi@gmail.com',Password:'456'},

    ]
  }
  addNewuser(user:User):Observable<string>{
return this.httpclient.post<string>(this.ApiLink,user)
  }
getall():Observable<User[]>
  {
    return this.httpclient.get<User[]>(this.ApiLink)
  }
  deleteus(id:number):Observable<void>
  {
   return this.httpclient.delete<void>(`${this.ApiLink}${id}`)
  }
  getbyId(id:number):Observable<User>{
    return this.httpclient.get<User>(`${this.ApiLink}${id}`)
  }
  modify(user:User):Observable<string>{
    return this.httpclient.patch<string>(`${this.ApiLink}${user.id}`,user)
  }
}
