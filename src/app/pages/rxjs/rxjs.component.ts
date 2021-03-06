import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObervable()
      .subscribe( 
        numero => console.log ('Subs...', numero),
        error => console.error('Error en el observador', error),
        () => console.log ('El obervador termino!'));

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina de va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObervable(): Observable<any> {
    return new Observable(
      observer => {
        let contador = 0;
        let itervalo = setInterval(
          () => {
            contador += 1;

            let salida = { valor: contador };

            observer.next( salida );

            if ( contador === 300) {
              clearInterval(itervalo);
              observer.complete();
            }

            //if ( contador === 2 ) {
            //  //clearInterval(itervalo);
            //  observer.error('Auxilio!');
            //}
          }
        , 500);
      }).retry(2)
      .map( (resp: any) => {
        return resp.valor;
      })
      .filter( (valor, index) => {
        console.log('Filter', valor, index);

        if ( valor % 2 === 1) {
          //impar
          return true;
        } else {
          //par
          return false;
        }
      } );
  }

}
