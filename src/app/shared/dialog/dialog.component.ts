import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() title:String;
  @Input() placeholder:String;
  @Input() isTextArea:boolean;
  @Input() purpose:String;

  topic:any;
  singleNote:any;

  @Output() data = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  btnClicked(isSave:boolean)
  {
    if(isSave)
    {
      // for new topic
      if(this.purpose === 'newTopic')
      {
        this.data.emit({
          topic: this.topic,
          success : true
        })

      }
    }
    else
    {
      if(this.purpose === 'newTopic')
      {
        this.data.emit({
          topic : null,
          success : false
        })
      }

    }
  }

}
