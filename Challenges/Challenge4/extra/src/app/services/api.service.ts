import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiDuringMatch(): Observable<any> {
    return this.http.get("http://localhost:5000/messages/messagesduringmatch");
  }
  apiAfterLoss(): Observable<any> {
    return this.http.get("http://localhost:5000/messages/messageslost")
  }
  apiAfterDraw(): Observable<any> {
    return this.http.get("http://localhost:5000/messages/messagesdraw")
  }
}
