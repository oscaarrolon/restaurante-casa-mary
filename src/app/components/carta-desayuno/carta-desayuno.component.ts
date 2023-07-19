import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta-desayuno',
  templateUrl: './carta-desayuno.component.html',
  styleUrls: ['./carta-desayuno.component.css']
})
export class CartaDesayunoComponent implements OnInit {


  isLoading: boolean

  constructor() {
    this.isLoading = true
  }


  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false
    }, 5000);

  }

}
