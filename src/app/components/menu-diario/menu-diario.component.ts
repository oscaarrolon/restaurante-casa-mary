import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'menu-diario',
  templateUrl: './menu-diario.component.html',
  styleUrls: ['./menu-diario.component.css', './menu-diario-mobile.css']
})
export class MenuDiarioComponent implements OnInit {

  @ViewChildren('animElements') public images!: QueryList<ElementRef>

  observer: IntersectionObserver | null = null;
  constructor() {
  }
  ngAfterViewInit() {
    const observeElement = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          console.log(entry.target.className)
        }
        else entry.target.classList.remove('visible')
        console.log(entry.target.className)
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
