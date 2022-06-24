import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export type Client = {
  id: number;
  firstName: string;
  lastName: string;
  birthday: string;
};

@Injectable()
export class ClientsService {
  constructor(private http: HttpClient) {
  }

  get(id: string) {
    return this.http.get<Client>(`http://localhost:3000/clients/${id}`);
  }

  getAll() {
    return this.http.get<Client[]>(`http://localhost:3000/clients`);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/clients/${id}`);
  }

  create(client: Client) {
    return this.http.post(`http://localhost:3000/clients`, client);
  }

  update(client: Client) {
    return this.http.patch(`http://localhost:3000/clients`, client);
  }
}
