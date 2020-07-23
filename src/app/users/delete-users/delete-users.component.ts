import { User } from './../users.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {

  id: string;
  user: User;

  constructor(private usersService: UsersService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usersService.getDados(this.id).subscribe(res => {
      this.user = res.data;
    });
  }

  deletar() {
    this.usersService.deleteUser(this.id).subscribe(res => alert('Removido com sucesso!'));
    this._route.navigate(['/users']);
  }

  cancelar() {
    this._route.navigate(['/users']);
  }

}
