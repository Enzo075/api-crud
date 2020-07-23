import { DeleteUsersComponent } from './users/delete-users/delete-users.component';
import { UpdateComponent } from './users/update/update.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'users', component: UsersComponent },
  {path: 'users/create', component: CreateUsersComponent },
  {path: 'users/update/:id', component: UpdateComponent },
  {path: 'users/delete/:id', component: DeleteUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
