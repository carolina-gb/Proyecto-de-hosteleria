import { Component } from '@angular/core';
import { AuthLoginService } from '../../Auth/auth-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public auth:AuthLoginService, private router:Router) { }

  Logout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
