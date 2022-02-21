import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cardArray:any[];

  constructor() { }

  ngOnInit(): void {
    this.cardArray =[
      {
        id:1,
        topic : 'Angular'
      },
      {
        id : 2,
        topic : 'Nodejs'
      },
      {
        id : 3,
        topic : 'Maths'
      },
      {
        id:4,
        topic : 'Angular'
      },
      {
        id : 5,
        topic : 'Nodejs'
      },
      {
        id : 6,
        topic : 'Maths'
      },
      {
        id:1,
        topic : 'Angular'
      },
      {
        id : 2,
        topic : 'Nodejs'
      },
      {
        id : 3,
        topic : 'Maths'
      },
      {
        id:4,
        topic : 'Angular'
      },
      {
        id : 5,
        topic : 'Nodejs'
      },
      {
        id : 6,
        topic : 'Maths'
      }
    ]
  }

}
