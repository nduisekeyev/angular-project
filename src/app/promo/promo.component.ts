import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-promo",
  standalone: true,
  templateUrl: "./promo.component.html",
  styleUrl: "./promo.component.scss",
})
export class PromoComponent implements OnInit {
  promo = { name: "Promo page", title: "Real page" };

  @Input() value = 0;

  constructor() {}

  ngOnInit(): void {
    console.log("hello from promo", this.promo);
  }
}
