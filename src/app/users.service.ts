import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "localhost:3000/api/v1/users"

  constructor(private http : HttpClient) { }

  // get all users
  getUsers()
  {
    return this.http.get(`${this.url}/all`);
  }
}
