import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  authUser(user:any)
  {
    let UserArray=[];
    const users= localStorage.getItem('Users');
    if(users)
    {
      UserArray=JSON.parse(users);
    }
    return UserArray.find((p: { userName: any; password: any; })=>p.userName===user.userName && p.password===user.password)
  }
}
