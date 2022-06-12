import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../models/Results';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getApi(nameSearched: string): Observable<Result> {
    return this.http.get<Result>(`https://api.genderize.io/?name=${nameSearched}`)
  }
}
