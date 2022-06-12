import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private api: ApiService) { }

  // return an observable that has the obj response
  getApiGender(nameSearched: string): any {
    return this.api.getApi(nameSearched);
  }
}
