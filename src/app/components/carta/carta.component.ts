import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Plato {
  [seccion: string]: {
    seccion: string;
    platos: { [nombre: string]: any };
  };
}

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  value: string
  platos: Plato = {};
  isLoading: boolean
  active: string
  constructor(private http: HttpClient) {
    this.value = ''
    this.isLoading = true
    this.active = ''

  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoading = false
    }, 5000);
  }

  loadJsonData(value: string) {
    this.http.get<Plato>('../../../assets/CARTA.JSON').subscribe((data: Plato) => {
      this.platos = data;
      console.log(this.platos[value]);
    });
  }

  clickVal(value: any) {
    this.platos = {}
    this.value = value
    console.log(this.value)
    this.loadJsonData(this.value);

    this.active = this.value
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
