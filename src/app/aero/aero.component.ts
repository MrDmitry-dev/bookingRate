import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aero',
  templateUrl: './aero.component.html',
  styleUrls: ['./aero.component.css']
})
export class AeroComponent implements OnInit {

  @Input() kmQuantity: any = '';
  @Input() age: string = '';
  @Input() lagguage: string = '';
  // @Input() clicked: boolean = false;

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
      this.priceEconomString = `Эконом: ${this.priceEconom} ₽`;

    if (this.priceExtended > 0)
      this.priceExtendedString = `Продвинутый: ${this.priceExtended} ₽`;

    if (this.priceLuxe > 0)
      this.priceLuxeString = `Люкс: ${this.priceLuxe} ₽`;

  }

  calculateEconom(): void {
    if (Number(this.lagguage) > 20)
      return;

    this.priceEconom += 4 * this.kmQuantity;

    if (Number(this.lagguage) > 5)
      this.priceEconom += 4000;

  }

  calculateExtended(): void {

    if (Number(this.lagguage) > 50)
      return;

    this.priceExtended += 8 * this.kmQuantity;

    if (Number(this.age) < 7)
      this.priceExtended *= 0.7;

    if (Number(this.lagguage) > 20)
      this.priceExtended += 5000;

  }

  calculateLuxe(): void {

    if (Number(this.lagguage) > 50)
      return;

    this.priceLuxe += 15 * this.kmQuantity;

    if (Number(this.age) < 16)
      this.priceLuxe *= 0.7;

  }

}
