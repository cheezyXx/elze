import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type LoginParams = {
  email: string;
  password: string;
};

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(params: LoginParams) {
    return this.http.post("http://localhost:3000/login", params);
  }
}
