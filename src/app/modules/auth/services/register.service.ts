import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

type RegisterParams = {
  password: string;
  email: string;
  firstName: string;
  lastName: string;
};

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(payload: RegisterParams) {
    return this.http.post("http://localhost:3000/register", payload);
  }
}
