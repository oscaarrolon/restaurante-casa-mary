import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-diario',
  templateUrl: './menu-diario.component.html',
  styleUrls: ['./menu-diario.component.css', './menu-diario-mobile.css']
})
export class MenuDiarioComponent implements OnInit {

  scroll: number
  animado: boolean

  constructor() {
    this.scroll = 0
    this.animado = false

  }
  ngOnInit() {

  }
  onScroll() {
    this.scroll = window.scrollY;
    if (this.scroll >= 950) {
      this.animado = true
    }
    else this.animado = false
    console.log(this.scroll)

  }
}
