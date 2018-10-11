import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TareasProvider } from '../../providers/tareas/tareas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = [1, 2, 3]
  constructor(public navCtrl: NavController,
    private alerta: AlertController,
    private servicioTareas: TareasProvider
  ) {
    this.tareas = servicioTareas.obtenertareas();
  }
  crearTarea() {
    let alerta = this.alerta.create(
      {
        title: "Crear tarea",
        message: "Crear tarea...",
        inputs: [
          {
            type: "Text",
            name: "texttarea"
          }
        ],
        buttons: [
          { text: "cancelar" },
          {
            text: "crear",
            handler: (datos) => {
              console.log(datos);
              // this.tareas.push(datos.texttarea);
              this.servicioTareas.creartarea(datos.texttarea);
            }
          }
        ]
      });
    alerta.present();
  }
}
