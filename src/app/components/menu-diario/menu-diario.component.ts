import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-diario',
  templateUrl: './menu-diario.component.html',
  styleUrls: ['./menu-diario.component.css']
})
export class MenuDiarioComponent implements OnInit {

  dia: Date
  semana: Object
  diaActual: String
  diaActualUpper: string
  constructor() {
    this.dia = new Date()
    this.semana = { weekday: 'long' }
    this.diaActual = this.dia.toLocaleDateString('es-ES', this.semana)
    this.diaActualUpper = this.diaActual.toUpperCase()
  }

  ngOnInit() {


  }

}
