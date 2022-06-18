import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type Alert = {
  type: string;
  message: string;
};

@Injectable({
  providedIn: "root",
})
export class AlertService {
  private subject = new Subject<Alert | undefined>();

  get() {
    return this.subject.asObservable();
  }

  success(message: string) {
    this.subject.next({ message, type: "alert-danger" });
  }

  danger(message: string) {
   this.subject.next({ message, type: "alert-success" });
  }

  clear() {
    this.subject.next(undefined);
  }
}
