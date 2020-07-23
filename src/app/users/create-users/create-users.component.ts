import { UsersService } from './../users.service';
import { RequestCreate, ResponseCreate } from './../users.model';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: ''
  }

  response: ResponseCreate

  constructor(private usersService: UsersService, private _route: Router) { }

  ngOnInit(): void{
  }

  save(){
    this.usersService.createUsers(this.request).subscribe(res => {
      this.response = res;
    });
  }

  cancelar() {
    this._route.navigate(['/users']);
  }

}
