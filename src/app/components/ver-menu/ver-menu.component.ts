import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReseñasService } from '../services/reseñas.service';

@Component({
  selector: 'app-ver-menu',
  templateUrl: './ver-menu.component.html',
  styleUrls: ['./ver-menu.component.css']
})
export class VerMenuComponent implements OnInit {

  @ViewChild('reseña') public reseñas!: ElementRef<any>
  observer: IntersectionObserver | null = null;

  datos: any[]

  constructor(private reviews: ReseñasService) {

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
    this.reviews.getPlaceDetails().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });

  }


}

