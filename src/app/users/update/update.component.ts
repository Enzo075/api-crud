import { RequestUpdate } from './../users.model';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: string;
  request: RequestUpdate;
  constructor(private usersService: UsersService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usersService.getDados(this.id).subscribe(res => {
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        email: `${res.data.email}`,
        job: ''
      }
    });
  }

  atualizar() {
    this.usersService.updateUser(this.id, this.request).subscribe(res => {
      alert(`Atualizar: ${res.updatedAt}, Nome: ${res.name}, E-mail: ${res.email}, Job: ${res.job}`);
      this._route.navigate(['/users']);
    });
  }

  cancelar() {
    this._route.navigate(['/users']);
  }

}
