import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { reject } from 'q';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentaje1: number = 5;
  porcentaje2: number = 5;

  constructor() {
  }

  ngOnInit() {
  }


}
