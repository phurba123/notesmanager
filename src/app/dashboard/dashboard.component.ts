import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allNoteTopics:any[];
  showDialog:boolean=false;

  constructor() { }

  ngOnInit(): void {
    
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
    }
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

}
