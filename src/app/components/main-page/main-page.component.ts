import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  video: any

  constructor() {

  }

  ngOnInit(): void {
    this.video = document.getElementById('myVideo');
    this.video.muted = true;
    this.video.autoplay = true;
    this.video.loop = true;

  }



}
