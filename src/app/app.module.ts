import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { FormsModule } from "@angular/forms";
import { UpdateComponent } from './users/update/update.component';
import { DeleteUsersComponent } from './users/delete-users/delete-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUsersComponent,
    UpdateComponent,
    DeleteUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
