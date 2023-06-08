import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dia',
  templateUrl: './menu-dia.component.html',
  styleUrls: ['./menu-dia.component.css']
})
export class MenuDiaComponent implements OnInit {

  today: string
  day = new Date()
  daysOfWeek: string[]
  dayOfWeek: number
  src: string

  constructor() {
    this.src = ''
    this.daysOfWeek = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]
    this.dayOfWeek = 0
    this.today = ''
  }

  ngOnInit(): void {
    this.dayOfWeek = this.day.getDay()
    this.today = this.daysOfWeek[this.dayOfWeek]
    this.src = `../../../assets/images/carta-diarios/${this.today}.png`
  }
}
