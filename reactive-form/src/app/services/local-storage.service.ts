import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private store = localStorage

  set(key: any, data: any){
   try {
    this.store.setItem(key, JSON.stringify(data));
    return true
   } catch (error) {
    return false
   }
  }
  get(key: any){
   try {
    const response = JSON.parse(this.store.getItem(key) ?? '');
    return{
      status: true,
      data: response
    }
   } catch (error) {
    return{
      status: false,
      data: null
    }
   }
  }
}
