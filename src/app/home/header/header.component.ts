import { Component } from '@angular/core';
import { AuthLoginService } from '../../Auth/auth-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public auth:AuthLoginService) { }

}
