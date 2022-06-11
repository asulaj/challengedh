import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestActivityService {

  constructor(private http: HttpClient) { }

  getActivity() { 
    return this.http.get('https://www.boredapi.com/api/activity');
  }
}
