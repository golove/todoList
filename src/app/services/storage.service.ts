import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  get(key: string): Array<any> {
    return JSON.parse(localStorage.getItem(key))
  }
  set(key: string, value: Array<any>) {
    localStorage.setItem(key, JSON.stringify(value))
  }

}
