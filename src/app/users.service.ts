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
}
