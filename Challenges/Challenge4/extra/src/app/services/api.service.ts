import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  public duringMatchPath: string = '../../assets/during-match.json';

  getMatchComments(): Observable<any> {
    return this.http.get(this.duringMatchPath)
  }
}
