import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild('animElements') public footerText!: ElementRef<any>

  observer: IntersectionObserver | null = null

  constructor() { }


  ngAfterviewInit() {

    if (this.footerText && this.footerText.nativeElement) {
      this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')

          } else entry.target.classList.remove('visible')
        })
      }, { root: null, threshold: .5 })
      this.observer.observe(this.footerText.nativeElement)

    }


  }






  ngOnInit() {

  }

}
