import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Model} from "../model";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  loaded: boolean | undefined;
  user: Model | undefined;

  getUser() {
    this.route.paramMap.subscribe((param) => {
      const routeParams = this.route.snapshot.paramMap;
      const id = Number(routeParams.get("id"));
      this.loaded = false;
      this.service.getUser(id).subscribe((user: any) => {
        this.user = user;
        this.loaded = true;
      })
    })
  }



}
