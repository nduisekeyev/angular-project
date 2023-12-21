import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.scss",
})
export class FormComponent implements OnInit {
  // Form props
  username: string = "";
  email: string = "";

  ngOnInit(): void {
    console.log("_form", { username: this.username, email: this.email });
  }

  submitForm() {
    console.log("Form submitted. Username:", {
      username: this.username,
      email: this.email,
    });
  }
}
