import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  userAvatar: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  userName: string = 'Juan Pérez';
  userInfo: string = 'Información personal';
  userPhone: string = '+52 271 314 0225';

  constructor() {}

  ngOnInit() {}

  changeAvatar() {
    // Aquí puedes implementar la lógica para cambiar el avatar, por ejemplo, abrir una cámara o seleccionar una imagen
    console.log('Cambiando avatar...');
  }

  saveChanges() {
    // Aquí puedes manejar la lógica para guardar los datos actualizados
    console.log('Datos guardados:');
    console.log(`Nombre: ${this.userName}`);
    console.log(`Info: ${this.userInfo}`);
    console.log(`Teléfono: ${this.userPhone}`);
  }
}
