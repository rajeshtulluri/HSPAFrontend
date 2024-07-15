import { Component } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private alertify:AlertifyService){}
loggedinUser: any;
// loggedin(): any {
//   return !!localStorage.getItem('token');
// }
onLogout() {
localStorage.removeItem('token');
this.alertify.success("You are Logged Out !!!!")
}

  loggedIn(){

    this.loggedinUser= localStorage.getItem('token');
    return this.loggedinUser
  }
}
