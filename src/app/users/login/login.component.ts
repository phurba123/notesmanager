import { Component, OnInit } from '@angular/core';
import {UsersService } from '../../users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res)=>
    {
      console.log('getting all users : ', res)
    },
    (err)=>
    {
      console.log('error on getting all users res : ', err)
    })
  }

}
