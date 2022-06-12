import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Result } from '../models/Results';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private searchList: Result[] = [];

  public searchList$ = new BehaviorSubject<Result[]>([]);

  constructor(private api: ApiService) { }


  getSearchList(): any {
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
  removeSearch(obj: any = []): void {

    console.log(obj)
    if (obj === []) {
      this.searchList$.next([]);
    } else {
      console.log(obj)
      let index = this.searchList.findIndex(item => item.count === obj.count);
      this.searchList.splice(index, 1);
    }
  }
}


