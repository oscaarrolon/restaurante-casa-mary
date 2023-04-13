import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReseñasService {


  private url = 'https://mybusiness.googleapis.com/v4/accounts/{account_id}/locations/ChIJRXGAtUw3Yg0R_UXu9UlphO4';
  private headers = new HttpHeaders({
    'Authorization': 'Bearer ' + 'AIzaSyCHy0SWFd9ute25ihYGbx2z2hqc2f5YKps',
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getRestaurantData(): Observable<any> {
    return this.http.get(this.url, { headers: this.headers });
  }
}



