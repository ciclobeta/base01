import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  //@ViewChild('txtProgreso') txtProgreso: ElementRef;

  @Input() etiquetas: string[];
  @Input() valores: number[];
  @Input() tipo: string;
  @Input() leyenda: string;

  //@Output() cambioValor: EventEmitter<number> = new EventEmitter();

  //public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  //public doughnutChartData:number[] = [350, 450, 100];
  //public doughnutChartType:string = 'doughnut';

  constructor() { }

  ngOnInit() {
   //this.doughnutChartLabels = this.etiquetas;
   //this.doughnutChartData = this.valores;
   //this.doughnutChartType = this.tipo;
  }

}
