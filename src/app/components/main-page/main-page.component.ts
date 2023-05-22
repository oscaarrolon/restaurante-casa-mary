import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css', './main-page-mobile.css']
})
export class MainPageComponent implements OnInit {

  video: any
  scrolled: number
  oculto: boolean
  title = 'front';
  console = "console"

  constructor() {
    this.scrolled = 0
    this.oculto = false
  }

  ngOnInit(): void {
    this.video = document.getElementById('myVideo');
    this.video.muted = true;
    this.video.autoplay = true;
    this.video.loop = true;

  }

  onScrollButton() {
    this.scrolled = window.scrollY;
    if (this.scrolled >= 100) {
      this.oculto = true
    }
    else { this.oculto = false }
  }

  consoleLog() {
    return console.log("funsionnaanana")
  }


}
