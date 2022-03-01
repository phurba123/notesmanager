import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private url = "http://localhost:3000/api/v1/notes";
  // private url = "http://notesmanagerapi.playgroundhub.live/api/v1/notes";

  constructor(
    private http : HttpClient
  )
   { }

   //create new topic
   createNoteTopic(data : any)
   {
     return this.http.post(`${this.url}/create`,data);
   }

  //  getting all user topics
  getAllTopics(userId:any)
  {
    return this.http.get(`${this.url}/get/all/${userId}`);
  }

  //getting notes of topic with topic id
  getAllNotes(id : any)
  {
    return this.http.get(`${this.url}/get/${id}`);
  }

  //adding new note to topic
  addNewNote(data : any)
  {
    console.info(data);
    let param = 
    {
      noteDesc : data.noteDesc
    }
    return this.http.post(`${this.url}/input/${data.topicId}`,param);
  }
}
