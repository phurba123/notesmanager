import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../notes.service';
import { Subject , pipe} from 'rxjs';
import {takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit,OnDestroy {

  private topicId : any;
  public currentNoteInfo : any;
  openDialog:boolean = false;

  _onDestroy = new Subject();

  constructor(
    private actRoute: ActivatedRoute,
    private noteService : NotesService
  ) { }

  ngOnInit(): void {

    this.topicId =  this.actRoute.snapshot.paramMap.get('id');
    console.log('topic id : ', this.topicId);
    this.getNotes();
  }

  // function for getting notes from server through service
  getNotes()
  {
    if(this.topicId)
    {
      this.noteService.getAllNotes(this.topicId).pipe(takeUntil(this._onDestroy))
      .subscribe(
        (notes : any)=>
        {
          console.log('notes : ', notes);
          if(notes.error)
          {
            console.log('some error : ');
          }
          else
          {
            this.currentNoteInfo = notes.data;
            console.log('current note info fetched : ', this.currentNoteInfo)
          }
        },
        (err)=>
        {
          console.log('err : ', err)
        }
      )
    }
  }

  addNewNoteToTopic()
  {
    this.openDialog = true;
  }

  dataFromDialog(e : any)
  {
    console.log('e : ', e);
    if(e.success)
    {
      //make a request to server for adding new note
      let data=
      {
        noteDesc : e.note,
        topicId : this.topicId
      }
      this.noteService.addNewNote(data).pipe(takeUntil(this._onDestroy))
      .subscribe((el : any)=>
      {
        if(el.error)
        {
          console.log('error')
        }
        else
        {
          console.log('el : ', el);
          this.getNotes()
        }
      })
    }
    this.openDialog = false;
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  trackNotes(index:any, items:any)
  {
    return index;
  }

  

}
