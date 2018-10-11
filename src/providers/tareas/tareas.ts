import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TareasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareasProvider {
  tareas= []
  constructor()
  {
    console.log('Hello TareasProvider Provider');
  }

  obtenertareas()
  {
  return  this.tareas;
  }
  
  creartarea(tarea){
    this.tareas.push(tarea);
  }
}
