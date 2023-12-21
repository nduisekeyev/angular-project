import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";
import { ClientComponent } from "../client/client.component";
import { ClientService } from "../services/client.service";
import { IUsers } from "../types/User";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [CommonModule, FormsModule, ClientComponent],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.scss",
})

// Parent component of the Client component
export class UserComponent implements OnInit {
  users: IUsers = [];

  notifier = new Subject();

  // Property for the Client
  messageForClient: string = "";

  sendMessageToClient() {
    console.log("Sending message to client:", this.messageForClient);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  receiveMessageFromClient(message: any) {
    console.log("Received message from client:", message);
  }

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService
      .getUserProfile()
      .pipe(takeUntil(this.notifier))
      .subscribe((response) => {
        console.log("_rs", response);

        this.users = response as IUsers;
      });
  }

  stopButton() {
    console.log("_stop button");

    // this.notifier.next(1);
    this.notifier.complete();
  }
}
