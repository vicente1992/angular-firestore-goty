import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GameVoto } from './../../interfaces/interfaces';

@Component({
  selector: 'app-grifico-barra-horizontal',
  templateUrl: './grifico-barra-horizontal.component.html',
  styleUrls: ['./grifico-barra-horizontal.component.css']
})
export class GrificoBarraHorizontalComponent implements OnDestroy {
  @Input() results: GameVoto[] = [];


  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';
  //intervalo;

  constructor() {
    // this.intervalo = setInterval(() => {
    //   console.log('tick');
    //   const newResult = [...this.results];
    //   for (let i in this.results) {
    //     this.results[i].value = Math.round(Math.random() * 500);
    //   }
    //   this.results = [...newResult];
    // }, 1500)
  }
  ngOnDestroy(): void {
    //(this.intervalo);
  }


  onSelect(event) {
    console.log(event);
  }

}
