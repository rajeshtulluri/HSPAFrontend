import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  
  addUser(user: User){
    let users: User[]=[];
    const storedUsers= localStorage.getItem('Users');
    if(storedUsers)
    {
      users=JSON.parse(storedUsers);
      users=[user, ...users];

    }
    else
    {
      users=[user, ...users]
    }

    localStorage.setItem('Users', JSON.stringify( users));

  }

}
