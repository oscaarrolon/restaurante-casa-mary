import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReseñasService } from '../services/reseñas.service';
declare var google: any;

@Component({
  selector: 'app-ver-menu',
  templateUrl: './ver-menu.component.html',
  styleUrls: ['./ver-menu.component.css']
})
export class VerMenuComponent implements OnInit {
  @ViewChild('reseña') public reseñas!: ElementRef<any>
  observer: IntersectionObserver | null = null;
  google: any
  datos: any[]
  coments: string

  constructor(private reviews: ReseñasService) {
    this.coments = 'review1'
    this.datos = []

  }

  ngAfterViewInit() {



    if (this.reseñas && this.reseñas.nativeElement) {
      this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, { root: null, threshold: 0.5 });

      this.observer.observe(this.reseñas.nativeElement);
    }

  }
  ngOnInit(): void {
    const cycle = () => {
      setTimeout(() => {
        this.coments = 'review2';
      }, 10000);

      setTimeout(() => {
        this.coments = 'review3';
      }, 20000);

      setTimeout(() => {
        this.coments = 'review1';
      }, 30000);
    };

    cycle();

    setInterval(cycle, 30000);
  }









}



