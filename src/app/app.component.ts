import { Component } from '@angular/core';

interface Componente{

  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] =[
    /* {
      icon: 'paw-outline',
      name: 'Registro', 
      redirecTo: '/registro'
    }, */
    {
      icon: 'videocam-outline', 
      name: 'Peliculas', 
      redirecTo: '/peliculas'
    },
    {
      icon: 'caret-forward-circle-outline',
      name: 'Series',
      redirecTo: '/series'
    },
  ]

}
