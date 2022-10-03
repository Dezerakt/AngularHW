import { Component, OnInit } from '@angular/core';
import {Model} from '../model';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private service: UserService) { }

  users: Model[] | undefined;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  deleteUser(id: number) {
    this.users = this.users?.filter(x => x.id !== id);
    this.service.deleteUser(id).subscribe(() => {
      console.log("User deleted", id);
    });
  }
}
