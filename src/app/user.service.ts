import {Observable} from "rxjs";
import {Model} from "./model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private client: HttpClient) {
  }

  base_url = "https://jsonplaceholder.typicode.com"

  getUsers(): Observable<Model[]> {
    return this.client.get<Model[]>(`${this.base_url}/users`);
  }

  getUser(id: number): Observable<Model> {
    return this.client.get<Model>(`${this.base_url}/users/${id}`);
  }

  deleteUser(id: number): Observable<any> {
    return this.client.delete(`${this.base_url}/users/${id}`)
  }

}
