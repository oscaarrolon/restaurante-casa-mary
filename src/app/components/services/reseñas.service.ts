import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReseñasService {



  constructor(private http: HttpClient) { }

  obtenerDatos() {
    this.http.get<any>('https://mybusiness.googleapis.com/v4/accounts/AIzaSyDV2NEOdtLFaeVNpzTTMWkcC6VG1SZrNKQ/locations/ChIJRXGAtUw3Yg0R_UXu9UlphO4/reviews')
      .subscribe(
        (data) => {
          console.log(data); // o haz algo con los datos recibidos
        },
        (error) => {
          console.error(error);
        }
      );
  }




}



