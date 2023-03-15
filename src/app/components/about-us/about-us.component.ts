import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  scrolled: number
  finalPosition: number


  constructor(private renderer: Renderer2) {
    this.scrolled = 0
    this.finalPosition = -100
  }



  onScroll() {
    this.scrolled = window.scrollY;
    if (this.scrolled >= 600) {
      this.finalPosition = 10;
    }
    else { this.finalPosition = -70 }

  }
}
