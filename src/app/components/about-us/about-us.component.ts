import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css', './mobile.css']
})
export class AboutUsComponent {

  scrolled: number
  finalPosition: number
  display: string
  oculto: boolean


  constructor(private renderer: Renderer2) {
    this.scrolled = 0
    this.finalPosition = -100
    this.display = "none"
    this.oculto = false
  }



  onScroll() {
    this.scrolled = window.scrollY;
    if (this.scrolled >= 600) {
      this.finalPosition = 100;
    }
    else { this.finalPosition = -70 }

  }

  onScrollButton() {
    this.scrolled = window.scrollY;
    if (this.scrolled >= 600) {
      this.display = ""
    }
    else { this.display = "none" }

  }

  onScrollRightImage() {
    this.scrolled = window.scrollY;
    if (this.scrolled >= 600) {
      this.oculto = true
    }
    else { this.oculto = false }

  }
}
