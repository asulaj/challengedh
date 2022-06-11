import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models/Activity';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /*Get activity api*/

  getRandomActivity(): Observable<Activity> {
    return this.http.get<Activity>('https://www.boredapi.com/api/activity');
  }

}
