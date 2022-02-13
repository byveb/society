import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  warn(arg0: string) {
      throw new Error("Method not implemented.");
  }

  error(arg0: string) {
      throw new Error("Method not implemented.");
  }

  constructor() { }
}
