import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: false,
})

export class StatusPage implements OnInit {
  recientes = [
    { nombre: 'Milli', hora: 'Ayer', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Ana', hora: 'hace 57 minutos', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
  ];

  vistos = [
    { nombre: 'Mafer', hora: '13:52', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Via', hora: '12:33', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Cuñis', hora: '10:37', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Don Ale', hora: '09:57', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Yiyip', hora: '09:16', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Mafer', hora: '13:52', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Via', hora: '12:33', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Cuñis', hora: '10:37', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Don Ale', hora: '09:57', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Yiyip', hora: '09:16', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
  ];

  constructor() { }

  ngOnInit() {
    // Este método se ejecuta al inicializar el componente.
  }

  // Función para añadir estado
  addEstado() {
    console.log('Añadir nuevo estado');
    // Aquí puedes implementar la lógica para añadir un estado
  }
}
