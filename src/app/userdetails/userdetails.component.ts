import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
user:User
constructor( private userservice:UserserviceService,private route:ActivatedRoute,private router:Router){
  this.user={id:0,Full_name:'',Email:'',Password:''}
  this.userservice.getbyId(parseInt(this.route.snapshot.queryParams['id'])).subscribe(
    (data)=>{
      this.user=data
    },
    (error)=>{
      console.log(error.message)
    }
  )
}
modifyUser(){
  this.userservice.modify(this.user).subscribe(
    (data)=>{
    alert("Upadted succesfully")
  this.router.navigateByUrl("/userlist")
    },
    (error)=>{
      console.log(error.message)
    }
  )

}
}
