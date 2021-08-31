import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-railway',
  templateUrl: './railway.component.html',
  styleUrls: ['./railway.component.css']
})
export class RailwayComponent implements OnInit {
  @Input() kmQuantity: any = '';
  @Input() age: string = '';
  @Input() lagguage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.calculateAndConvertAll();
  }

  priceEconom: number = 0;
  priceExtended: number = 0;
  priceLuxe: number = 0;

  priceEconomString: string = '';
  priceExtendedString: string = '';
  priceLuxeString: string = '';

  calculateAndConvertAll(): void {
    this.calculateEconom();
    this.calculateExtended();
    this.calculateLuxe();
    this.converter();
  }

  converter(): void {
    if (this.priceEconom > 0)
      this.priceEconomString = `Эконом: ${this.priceEconom.toFixed(2)} ₽`;

    if (this.priceExtended > 0)
      this.priceExtendedString = `Продвинутый: ${this.priceExtended.toFixed(2)} ₽`;

    if (this.priceLuxe > 0)
      this.priceLuxeString = `Люкс: ${this.priceLuxe.toFixed(2)} ₽`;

  }

  calculateEconom(): void {
    if (Number(this.lagguage) > 50)
      return;

    this.priceEconom += 0.5 * this.kmQuantity;

    if (Number(this.age) < 5) {
      this.priceEconom *= 0.5;
    }

    if (Number(this.lagguage) > 15)
      this.priceEconom += Number(this.lagguage) * 50;


  }

  calculateExtended(): void {

    if (Number(this.lagguage) > 60)
      return;

    this.priceExtended += 2 * this.kmQuantity;

    if (Number(this.age) < 8)
      this.priceExtended *= 0.7;

    if (Number(this.lagguage) > 20)
      this.priceExtended += 50 * Number(this.lagguage);
  }

  calculateLuxe(): void {

    if (Number(this.lagguage) > 60)
      return;

    this.priceLuxe += 4 * this.kmQuantity;

    if (Number(this.age) < 16)
      this.priceLuxe *= 0.8;

  }

}
