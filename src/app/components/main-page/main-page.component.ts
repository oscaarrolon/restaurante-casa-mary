import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css', './main-page-mobile.css']
})
export class MainPageComponent implements OnInit {

  @ViewChild('video', { static: false }) video: ElementRef


  scrolled: number
  oculto: boolean
  title = 'front';
  console = "console"
  isLoading: boolean

  constructor() {
    this.scrolled = 0
    this.oculto = false
    this.isLoading = true
    this.video = new ElementRef(null);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false
      console.log(this.isLoading)
    }, 4600);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {

      this.video.nativeElement.muted = true;
      this.video.nativeElement.autoplay = true;
      this.video.nativeElement.loop = true;
    }, 5000);


  }

  onScrollButton() {
    this.scrolled = window.scrollY;
    if (this.scrolled >= 100) {
      this.oculto = true
    }
    else { this.oculto = false }
  }

}
