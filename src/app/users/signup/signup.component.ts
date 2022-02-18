import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName:any;
  middleName:any;
  lastName:any;
  email:any;
  password:any;

  allSubscriber :any[]=[];
  // user registration status , true if registation is sucess else false
  userRegistraionStatus : Boolean;
  // property to check if user has initiated for registration, initially false
  // signUpInit : Boolean = false;

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
  }

  // signup function
  signUp()
  {
    // this.signUpInit = true;
    let data = 
    {
      firstName : this.firstName,
      middleName : this.middleName,
      lastName : this.lastName,
      email : this.email,
      password : this.password
    }
    this.allSubscriber.push(this.userService.registerUser(data).subscribe((res:any)=>{

      // on fail
      if(res['error'])
      {
        this.userRegistraionStatus = false;
      }
      else
      {
        // on success
        this.userRegistraionStatus = true;
      }
      console.log('res : ', res)
    },
    (err)=>
    {
      this.userRegistraionStatus = false;
      console.log('err : ', err)
    }))
  }

  ngOnDestroy()
  {
    console.log(this.allSubscriber)
    // this.allSubscriber.forEach((subscriber)=>
    // {
    //   subscriber.unsubscribe();
    // })
  }

}
