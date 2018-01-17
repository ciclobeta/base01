import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // @ViewChild('txtProgreso') txtProgreso: ElementRef;

  @Input() etiquetas: string[];
  @Input() valores: number[];
  @Input() tipo: string;
  @Input() leyenda: string;

  // @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

}
