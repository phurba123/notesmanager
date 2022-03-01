import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private url = "http://localhost:3000/api/v1/users";
  private url = "http://notesmanagerapi.playgroundhub.live/api/v1/users"

  constructor(private http : HttpClient) { }

  // get all users
  getUsers()
  {
    return this.http.get(`${this.url}/all`);
  }

  // register user
  registerUser(data:any)
  {
    return this.http.post(`${this.url}/create`, data);
  }

  // login user
  /**
   * 
   * @param data : include data, email and password
   */
  loginUser(data:any)
  {
    return this.http.post(`${this.url}/login`,data);
  }

  // logout user

  // get single user with id


  // set user info on localstorage
  setInfo(data : any)
  {
    localStorage.setItem('39dk29dkoox', data.userId);
    localStorage.setItem('hhhfstodk88efkjn', data.token);
    localStorage.setItem('fjsdkfemailfkd',data.email);

  }

  //getInfo
  getInfo()
  {
    let data=
    {
      _id : localStorage.getItem('39dk29dkoox'),
      email:localStorage.getItem('fjsdkfemailfkd'),
      token : localStorage.getItem('hhhfstodk88efkjn')
    }
    return data;
  }
}
