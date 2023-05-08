import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  getPlaceDetails(): Observable<any> {
    const url = 'https://maps.googleapis.com/maps/api/place/details/json';
    const params = new HttpParams()
      .set('place_id', 'ChIJRXGAtUw3Yg0R_UXu9UlphO4')
      .set('fields', 'name,rating,formatted_phone_number')
      .set('reviews_sort', 'newest') // Aquí se agrega el parámetro "reviews_sort"
      .set('key', 'AIzaSyCHy0SWFd9ute25ihYGbx2z2hqc2f5YKps'); // Reemplazar con tu propia clave de API de Google Places

    return this.http.get(url, { params });
  }
}



