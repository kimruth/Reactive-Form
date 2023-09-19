import { Component } from '@angular/core';
import { Iuser } from 'src/app/interface/interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  constructor(private Auth: AuthService){}
  user: Iuser ={
    email: '',
    password: ''
  }
  update(){
    this.Auth.update(this.user)
  }
}
