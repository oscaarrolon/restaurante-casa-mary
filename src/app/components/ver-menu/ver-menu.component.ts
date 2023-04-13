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
            console.log(entry.target.className);
          } else {
            entry.target.classList.remove('visible');
          }
          console.log(entry.target.className);
        });
      }, { root: null, threshold: 0.5 });

      this.observer.observe(this.reseñas.nativeElement);
    }

  }


  ngOnInit(): void {

  }

  traerDatos() {
    this.reviews.getRestaurantData().subscribe(data => {
      this.datos = data;
    })
    console.log(this.datos)

  }

}
