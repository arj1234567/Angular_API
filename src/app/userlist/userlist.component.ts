import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserserviceService } from '../userservice.service';
import { error } from 'console';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
user:User[]
constructor(private userservice:UserserviceService){
this.user=[]
this.BindData()
}
BindData(){
  this.userservice.getall().subscribe(
    (data)=>{
      this.user=data
    },
    (error)=>{
      console.log(error.message)
    }
  )
}
deleteUser(id:number)
{
  this.userservice.deleteus(id).subscribe(
    ()=>{
      this.BindData()
    },
    (error)=>{
      console.log(error.message)
    }
  )
}
}
