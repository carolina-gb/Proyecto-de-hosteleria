import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from '../Auth/auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string = "";
  password:string = "";
  alert=false;

  constructor(private router: Router,private auth:AuthLoginService) {}

  onSubmit(){
    if(this.username == 'admin' && this.password == 'admin'){
      this.alert=false;
      this.auth.login();
      this.router.navigate(['/']);
    }
    else{
      this.alert=true;
    }
  }
}
