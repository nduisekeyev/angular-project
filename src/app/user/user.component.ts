import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ClientService } from "../services/client.service";
import { IUsers } from "../types/User";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.scss",
})
export class UserComponent implements OnInit {
  users: IUsers = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService
      .getUserProfile()
      .pipe((data) => {
        return data;
      })
      .subscribe((response) => {
        this.users = response as IUsers;
      });
  }
}
