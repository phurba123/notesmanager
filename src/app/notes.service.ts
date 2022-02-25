import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private url = "http://localhost:3000/api/v1/notes";

  constructor(
    private http : HttpClient
  )
   { }

   //create new topic
   createNoteTopic(data : any)
   {
     return this.http.post(`${this.url}/create`,data);
   }
}
