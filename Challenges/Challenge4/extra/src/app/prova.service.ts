import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvaService {

  constructor(private http: HttpClient) { }

  tryApi(): Observable<any> {
    return this.http.get("http://localhost:5000/messages/messagesdm");
  }
}
