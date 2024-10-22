import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient) { }

  // Method to get data from the API
  getData(location:string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "?key=967de4c70de143c6bdb80025241910&q='"+ location + "&aqi=no'");
  }
}
