import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { takeUntil } from 'rxjs/operators';
import { Subject,pipe } from 'rxjs';
import { UsersService } from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allNoteTopics:any[];
  showDialog:boolean=false;

  private _onDestry = new Subject();

  constructor(
    private noteService : NotesService,
    private userService : UsersService,
    private router : Router
  ) 
  { }

  ngOnInit(): void {

    // gettin all topics of user
    this.findAllTopics();
    
  }

  addNoteTopic()
  {
    this.showDialog = true;
  }

  dataFromDialog(data:any)
  {
    this.showDialog = false;
    if(data.success)
    {
      // if user has entered a new topic then save it
      console.log('data when success : ', data);
      let note =
      {
        userId : this.userService.getInfo()._id,
        topic : data.topic
      };

      this.noteService.createNoteTopic(note).pipe(takeUntil(this._onDestry)).subscribe((res:any)=>
      {
        console.log('res : ', res);
        if(res.error)
        {
          console.log('failed to create new topic');
          //TODO handle this later
        }
        else
        {
          this.findAllTopics();
        }
      },
      (err)=>
      {
        console.log('err : ', err);
      })
    }
    else
    {
      console.log('data when canceled : ', data)
    }
  }

  // finding all notes
  findAllTopics()
  {
    this.noteService.getAllTopics(this.userService.getInfo()._id)
    .pipe(takeUntil(this._onDestry)).subscribe((topics:any)=>
    {
      console.log('topics : ', topics);
      this.allNoteTopics = topics.data;
    },
    (err)=>
    {
      console.log('err : ', err);
    })
  }

  goToNote(note : any)
  {
    console.log('current note : ', note)
    this.router.navigate(['view', note._id]);
  }




  // this.cardArray =[
  //   {
  //     id:1,
  //     topic : 'Angular'
  //   },
  //   {
  //     id : 2,
  //     topic : 'Nodejs'
  //   },
  //   {
  //     id : 3,
  //     topic : 'Maths'
  //   },
  //   {
  //     id:4,
  //     topic : 'Angular'
  //   },
  //   {
  //     id : 5,
  //     topic : 'Nodejs'
  //   },
  //   {
  //     id : 6,
  //     topic : 'Maths'
  //   },
  //   {
  //     id:1,
  //     topic : 'Angular'
  //   },
  //   {
  //     id : 2,
  //     topic : 'Nodejs'
  //   },
  //   {
  //     id : 3,
  //     topic : 'Maths'
  //   },
  //   {
  //     id:4,
  //     topic : 'Angular'
  //   },
  //   {
  //     id : 5,
  //     topic : 'Nodejs'
  //   },
  //   {
  //     id : 6,
  //     topic : 'Maths'
  //   }
  // ]

  ngOnDestroy()
  {
    this._onDestry.next();
    this._onDestry.complete();
  }

}
