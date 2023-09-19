import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Iuser } from '../interface/interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private LocalService: LocalStorageService, private router: Router) { }
  register(user: Iuser){
    const setToStorage = this.LocalService.get('User');
    let storeLocally: Object[] = [];
    // let symbols: number = 0;
    if (setToStorage.status == true) {
      storeLocally = setToStorage.data;
      console.log(setToStorage);
      if (user["name"] == '' && user["email"] == '' && user["password"] == '') {
        alert("Please Verify You inputs");
        return
      }

      for (const objectUsers of setToStorage.data) {
        if (user['name'] == objectUsers['name'] || user['email'] == objectUsers['email']) {
          alert('Sorry, account already exist');
          // window.location.replace('');
          return;
        } else {
          continue
        }
      }
      // let arrLength: number = setToStorage.data.length;
      // let lastUser = setToStorage[arrLength - 1]
    }
    storeLocally.push(user);
    this.LocalService.set('User', storeLocally);
    alert('Wow, You Successfully loggedin')
    this.router.navigateByUrl('/dashboard')
  }
  login(user: Iuser){
    const register = this.LocalService.get('User');
    let loginUser;
    for (const userObject of register.data) {
      // console.log(register.data);
      // if(userObject['username'] == '' && userObject['password'] == '' ){
      //   alert('You are not a user')
      // }
      if (user['email'] == userObject['email'] && user['password'] == userObject['password']) {
        alert('Successfully Login,' + userObject.username);

        this.router.navigateByUrl('/dashboard')
        return;
      } else {
        continue
      }
    }
    alert('Sorry, wrong details')
  }
  update(user: Iuser){
    const setToStorage = this.LocalService.get('User');
    let storeLocally: Object[] = [];
    // let symbols: number = 0;
    if (setToStorage.status == true) {
      storeLocally = setToStorage.data;
      console.log(setToStorage);
      if (user["name"] == '' && user["email"] == '' && user["password"] == '') {
        alert("Please Verify You inputs");
        return
      }

      for (const objectUsers of setToStorage.data) {
        if (user['email'] == objectUsers['email'] || user['password'] == objectUsers['password']) {
           alert("Updated")
          return;
        } else {
          continue
        }
      }
      // let arrLength: number = setToStorage.data.length;
      // let lastUser = setToStorage[arrLength - 1]
    }
    storeLocally.push(user);
    this.LocalService.set('User', storeLocally);
    alert('Updated')
    this.router.navigateByUrl('/login')
  }
}
