import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private readonly url = `https://jsonplaceholder.typicode.com`;

  constructor(private http: HttpClient) {}

  getUserProfile() {
    return this.http.get(`${this.url}/users`);
  }
}
