import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteComponent } from './note/note.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  // {path:'',component:MynotesComponent,pathMatch:'full'}
  {path:'login', component:LoginComponent},
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'signup', component:SignupComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'view/:id', component: NoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
