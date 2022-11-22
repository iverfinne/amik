import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  apiUrl = 'https://api.githhub.com/users?per_page=20';

  constructor(private http: HttpClient) {}


  getUsers() {
    return this.http.get(`${this.apiUrl}?per_page=20`);
  }


  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/ ${username}`);


  }
}
