import { Component } from '@angular/core';
import { Iuser } from 'src/app/interface/interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private Auth: AuthService){}

  user: Iuser={
  name: '',
  email: '',
  password: ''
  }

  register(){
    this.Auth.register(this.user)
  }
}
