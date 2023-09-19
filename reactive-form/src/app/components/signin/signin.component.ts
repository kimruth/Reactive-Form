import { Component } from '@angular/core';
import { Iuser } from 'src/app/interface/interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private Auth: AuthService){}
  user: Iuser={
    email: '',
    password: ''
    }
  
    login(){
      this.Auth.register(this.user)
    }
}
