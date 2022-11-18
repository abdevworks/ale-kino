import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = {
    username: 'Nameless',
    type: {
      isUser: true,
      isAdmin: false,
    },
  };

  getUser() {
    return this.user;
  }

  constructor() {}
}
