import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather';
 location = 'lahore';
 weatherDetails : any = ""

  constructor(private apiService: ApiService) {
   this.fatchWeatherData();
  }

  fatchWeatherData() {
  this.apiService.getData(this.location).subscribe(
    data =>{
  this.weatherDetails = data;
  console.log(this.weatherDetails);
  },error=>{
  console.log(error);
  })
}

}
