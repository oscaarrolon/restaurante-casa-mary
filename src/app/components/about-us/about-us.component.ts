import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css', './mobile.css']
})
export class AboutUsComponent {

  @ViewChild('animElement') public animElement!: ElementRef<any>
  observer: IntersectionObserver | null = null;


  constructor() {

  }



  ngAfterviweInit() {

    if (this.animElement && this.animElement.nativeElement) {
      this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {

      })
    }
  }
}
