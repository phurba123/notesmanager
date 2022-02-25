import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DialogComponent
  ]
})
export class SharedModule { }
