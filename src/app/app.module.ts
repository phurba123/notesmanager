import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UsersModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[FormsModule]
})
export class AppModule { }
