import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = 'Titulo pagina';

  constructor( 
    private router: Router,
    public _title: Title,
    public _meta: Meta
  ) {
   
       this.getDataEvent()
           .subscribe( data => {
             console.log(data);
             this.label = data.titulo;
             this._title.setTitle(data.titulo);

             let metaTag: MetaDefinition = {
               name: 'description',
               content: this.label 
             };
             this._meta.updateTag();
           });
   }


  getDataEvent() {
    return this.router.events
      .filter( evento => evento instanceof ActivationEnd )
      .filter( (evento:ActivationEnd) => evento.snapshot.firstChild === null )
      .map( (evento: ActivationEnd) => evento.snapshot.data );
  
  }

  ngOnInit() {
  }

}
