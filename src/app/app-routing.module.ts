import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MynotesComponent } from './notes/mynotes/mynotes.component';

const routes: Routes = [
  {path:'',component:MynotesComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
