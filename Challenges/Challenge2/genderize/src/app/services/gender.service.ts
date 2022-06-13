import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Result } from '../models/Results';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private key: string = 'searchList'; // Local storage variable key for array
  private localStorageSearchList: Result[] = [];  // Local Storage variable  value for  array

  private searchList: Result[] = [];

  public searchList$ = new BehaviorSubject<Result[]>([]);

  constructor(private api: ApiService) { }


  getSearchList(): any {
    let storage = JSON.parse(localStorage.getItem(this.key) || '{}');
    if (Array.isArray(storage)) { // check if the local storage is empty

      this.localStorageSearchList = storage;
      this.searchList.push(...this.localStorageSearchList)
      this.searchList$.next(this.searchList)
    }
    return this.searchList$.asObservable();
  }


  // return an observable that has the obj response
  getApiGender(nameSearched: string): any {
    return this.api.getApi(nameSearched);
  }


  //Save Search
  saveSearch(obj: Result): void {
    this.searchList.push({ ...obj })
    this.searchList$.next(this.searchList)
  }

  // Remove item from searchList or clean up all searclList if pareament is empty
  removeSearch(obj: Result | undefined = undefined): void {

    if (obj === undefined) {
      this.searchList = [];
      this.localStorageSearchList = [];
      localStorage.removeItem(this.key) // clean up local storage
      this.searchList$.next(this.searchList)
    } else {
      let index = this.searchList.findIndex(item => item.count === obj.count);
      this.searchList.splice(index, 1);
      this.localStorageSearchList.splice(index, 1) // remove item from local storage
      localStorage.setItem(this.key, JSON.stringify(this.localStorageSearchList));
    }
  }


  // Add item to local Storage
  addToLocalStorage(obj: Result): void {
    this.localStorageSearchList.push({ ...obj });
    localStorage.setItem(this.key, JSON.stringify(this.localStorageSearchList));

  }



}


