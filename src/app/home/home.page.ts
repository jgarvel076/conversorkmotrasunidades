import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  kilometros: number = 0;
  millas: number = 0;
  yardas: number = 0;
  pies: number = 0;
  pulgadas: number = 0;
  txtMensaje: string = "";

  constructor() {}

  convertirUnidades() {
    if (this.kilometros) {
      // 1 kilómetro = 0.621371 millas
      // 1 kilómetro = 1093.61 yardas
      // 1 kilómetro = 3280.84 pies
      // 1 kilómetro = 39370.1 pulgadas
      this.millas = this.kilometros * 0.621371;
      this.yardas = this.kilometros * 1093.61;
      this.pies = this.kilometros * 3280.84;
      this.pulgadas = this.kilometros * 39370.1;
    } else {
      this.txtMensaje = "Por favor, ingrese una cantidad en kilómetros.";
    }
  }
}


