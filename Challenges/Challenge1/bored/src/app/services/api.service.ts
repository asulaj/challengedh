import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/Activity';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /*Get activity api*/
  getActivity(): Observable<Activity[]> {
    return this.http.get<Activity[]>('https://boredapi.com/api/activity/').pipe(
      map((res: any) => {
        return res;
      })
    )
  }
}
