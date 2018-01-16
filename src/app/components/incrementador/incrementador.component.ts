import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgreso') txtProgreso: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges(newValue: number) {
    //let elemHTML: any = document.getElementsByName('porcentaje')[0];

    //this.cambiarValor (newValue);
    //this.porcentaje = this.porcentaje + newValue;
    this.porcentaje = newValue;
    if (this.porcentaje < 0) {
      this.porcentaje = 0;
    }
     else if (this.porcentaje > 100) {
      this.porcentaje = 100;
    }

    //elemHTML.value = this.porcentaje;
    this.txtProgreso.nativeElement.value = this.porcentaje;

    this.cambioValor.emit( this.porcentaje );

  }

  cambiarValor(valor: number) {
    this.porcentaje = this.porcentaje + valor;
    if (this.porcentaje < 0) {
      this.porcentaje = 0;
    }
     else if (this.porcentaje > 100) {
      this.porcentaje = 100;
    }

    this.cambioValor.emit( this.porcentaje );
    this.txtProgreso.nativeElement.focus();

    // console.log(this.porcentaje);
  }

}
