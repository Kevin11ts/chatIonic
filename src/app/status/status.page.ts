import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: false,
})

export class StatusPage implements OnInit {
  recientes = [
    { nombre: 'Laura Black', hora: 'Ayer', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Chris Yellow', hora: 'hace 57 minutos', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
  ];

  vistos = [
    { nombre: 'John Doe', hora: '13:52', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Jane Smith', hora: '12:33', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Bob Johnson', hora: '10:37', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Alice Brown', hora: '09:57', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Charlie Green', hora: '09:16', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Emily White', hora: '13:52', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Michael Blue', hora: '12:33', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Laura Black', hora: '10:37', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Chris Yellow', hora: '09:57', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { nombre: 'Sophia Pink', hora: '09:16', image: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
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
