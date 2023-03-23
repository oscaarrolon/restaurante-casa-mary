import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-diario',
  templateUrl: './menu-diario.component.html',
  styleUrls: ['./menu-diario.component.css', './menu-diario-mobile.css']
})
export class MenuDiarioComponent implements OnInit {

  scroll: number
  animado: boolean
  opacity: number
  constructor() {
    this.scroll = 0
    this.animado = false
    this.opacity = 0

  }
  ngOnInit() {

  }
  onScroll() {
    this.scroll = window.scrollY;
    if (this.scroll >= 750) {
      this.animado = true
      this.opacity = 1
    }
    else {
      this.animado = false
      this.opacity = 0
    }
    console.log(this.opacity)
  }

}
