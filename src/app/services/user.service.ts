import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<any[]>(`${config.Promise}/users`);
  }

  register(user) {
    return this.http.post(`${config.Promise}/users/register`, user);
  }

  delete(id) {
    return this.http.delete(`${config.Promise}/users/${id}`);
  }

}
