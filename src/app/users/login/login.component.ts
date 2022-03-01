import { Component, OnInit } from '@angular/core';
import {UsersService } from '../../users.service';
import { Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : String;
  password : String;
  loginFailed : Boolean = false;
  loginFailedMsg:String;

  _onDestroy = new Subject();

  constructor(private userService : UsersService,
    private router : Router) { }

  ngOnInit(): void {
  }

  signInUser()
  {
    let data = {
      email : this.email,
      password : this.password
    }

    this.userService.loginUser(data)
    .pipe(takeUntil(this._onDestroy))
    .subscribe(
      (res:any)=>
      {
        if(res['error'])
        {
          this.loginFailed = true;
          this.loginFailedMsg = res['message'];
        }
        else
        {
          console.log('res : ', res)
          //login successfull
          let data=
          {
            userId:res.data.userDetails._id,
            token:res.data.authToken,
            email:res.data.userDetails.email
          };
          console.log('datat : ', data)
          this.userService.setInfo(data);
          this.router.navigate(['dashboard']);
        }
      },
      (err)=>
      {
        this.loginFailed = true;
        this.loginFailedMsg = 'Login Failed';
      }
    )
  }

  ngOnDestroy()
  {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

}
