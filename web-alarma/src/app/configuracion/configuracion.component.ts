import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  options: { [key: string]: boolean } = {
    tiempoReal: false,
    autoridades: false,
    alertasGlobales: false,
    notificacionPush: false,
    enviarSMS: false,
    mensajeWhatsApp: false,
  };

  onToggleChange(event: boolean, id: any): void {
    console.log(event)
    if (id in this.options) {
      this.options[id] = event;
      console.log('Options updated:', this.options);
    } else {
      console.error(`Invalid option id: ${id}`);
    }
  }

}
