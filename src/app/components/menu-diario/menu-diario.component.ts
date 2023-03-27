import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-diario',
  templateUrl: './menu-diario.component.html',
  styleUrls: ['./menu-diario.component.css', './menu-diario-mobile.css']
})
export class MenuDiarioComponent implements OnInit {
  scroll = 0;
  animado = false;
  opacity = 0;
  elementIds = ['my-image1', 'my-image2', 'my-image3'];
  scrollThresholds = [990, 1200, 900];

  constructor() { }

  ngOnInit() { }

  onScroll() {
    this.scroll = window.scrollY;
    for (let i = 0; i < this.elementIds.length; i++) {
      const elementId = this.elementIds[i];
      const element = document.getElementById(elementId);
      if (element) {
        const elementOffset = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const scrollThreshold = this.scrollThresholds[i];
        if (this.scroll >= scrollThreshold) {
          this.animado = true;
          this.opacity = 1;
        } else {
          this.animado = false;
          this.opacity = 0;
        }



      }
    }
  }
}
