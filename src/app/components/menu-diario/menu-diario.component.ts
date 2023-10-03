import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'menu-diario',
  templateUrl: './menu-diario.component.html',
  styleUrls: ['./menu-diario.component.css', './menu-diario-mobile.css']
})
export class MenuDiarioComponent implements OnInit {

  @ViewChildren('animElements') public images!: QueryList<ElementRef>

  constructor() {
  }
  ngAfterViewInit() {
    const observeElement = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
        else entry.target.classList.remove('visible')
      });
    }
    const observer = new IntersectionObserver(observeElement, {
      root: null,
      threshold: .5
    })
    this.images.forEach((img: any) => {
      observer.observe(img.nativeElement)
    })
  }
  ngOnInit() {

  }




}
