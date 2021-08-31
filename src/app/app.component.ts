import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookingRate';
  display = false;
  componentShown = false;
  Km: string = '';
  Age: string = '';
  Lagguage: string = '';



  getKm(value: string) {
    this.Km = value;
  }

  getAge(value: string) {
    this.Age = value;
  }

  getLagguage(value: string) {
    this.Lagguage = value;
  }

  getAll(): void {
    // console.log(`${this.Km} km ${this.Age} age ${this.Lagguage} lagguage`);
    if(this.Km !== '' && this.Age !== '' && this.Lagguage !== '') {

      this.display = !this.display; // do it later use componentShown

    }
    
  }

}
