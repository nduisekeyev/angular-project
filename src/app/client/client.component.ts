import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-client",
  standalone: true,
  imports: [],
  templateUrl: "./client.component.html",
  styleUrl: "./client.component.scss",
})
export class ClientComponent {
  @Input() messageFromParent: string = "";
  @Output() messageToParent = new EventEmitter<string>();

  sendMessageToParent() {
    const message = "Hello from Client!";
    this.messageToParent.emit(message);
  }
}
