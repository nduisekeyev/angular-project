import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { PromoComponent } from "./promo/promo.component";
import { UserComponent } from "./user/user.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PromoComponent,
    FormComponent,
    UserComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  providers: [],
})
export class AppComponent implements OnInit {
  title = "angular-project";

  ngOnInit(): void {
    console.log("title", this.title);
  }
}
