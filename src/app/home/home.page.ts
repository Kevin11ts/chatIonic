import { Component } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from '../popover-menu/popover-menu.component'; // Importa el componente PopoverMenu


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
  export class HomePage {
    popoverEvent: any;

    
  chats = [
    {
      name: 'John Doe',
      message: 'Hello, how are you?',
      time: '10:00 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Jane Smith',
      message: 'Let’s catch up later!',
      time: '11:15 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Bob Johnson',
      message: 'Meeting at 3 PM is confirmed.',
      time: '9:45 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Alice Brown',
      message: 'Great job on the presentation!',
      time: '8:30 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Charlie Green',
      message: 'Are you free tomorrow?',
      time: '7:20 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Emily White',
      message: 'I’ll call you later.',
      time: '6:00 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Michael Blue',
      message: 'Check out this link!',
      time: '5:45 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Laura Black',
      message: 'Can you help me with this task?',
      time: '4:50 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Chris Yellow',
      message: 'Happy Birthday!',
      time: '2:15 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Sophia Pink',
      message: 'Let’s have lunch next week.',
      time: '3:30 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'James Red',
      message: 'Just sent the documents.',
      time: '12:00 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Olivia Purple',
      message: 'Thank you for your help!',
      time: '1:45 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Daniel Silver',
      message: 'Let me know if you’re interested.',
      time: '10:30 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Mia Gold',
      message: 'I’ll send the invite shortly.',
      time: '11:10 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Ethan Bronze',
      message: 'How was your weekend?',
      time: '9:00 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Liam Indigo',
      message: 'See you at the party!',
      time: '6:30 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Isabella Teal',
      message: 'Can you review my work?',
      time: '7:00 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Noah Violet',
      message: 'I’m on my way.',
      time: '8:10 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Ella Lime',
      message: 'Don’t forget the meeting tomorrow.',
      time: '5:20 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Ava Coral',
      message: 'Are you available for a call?',
      time: '4:40 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Benjamin Aqua',
      message: 'Got it, thanks!',
      time: '2:50 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Charlotte Navy',
      message: 'Can we reschedule?',
      time: '3:00 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'William Beige',
      message: 'The files are uploaded.',
      time: '11:35 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Amelia Gray',
      message: 'Thanks for your email.',
      time: '9:25 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Henry Rose',
      message: 'Where should we meet?',
      time: '10:50 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Harper Mint',
      message: 'Looking forward to it!',
      time: '8:15 AM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Elijah Peach',
      message: 'See you soon!',
      time: '1:25 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Evelyn Sky',
      message: 'I’ll send you the details.',
      time: '12:10 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Lucas Cloud',
      message: 'Let me know what you think.',
      time: '4:00 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Victoria Sand',
      message: 'It was nice talking to you.',
      time: '7:50 PM',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
  
  ];

  constructor(private popoverController: PopoverController) {}

  // Método para abrir el popover
  async openPopover(event: any) {
    const popover = await this.popoverController.create({
      component: PopoverMenuComponent,  // Asegúrate de crear un componente para el popover
      event: event,
      translucent: true
    });
    return await popover.present();
  }

  // Método que se ejecuta cuando se selecciona una opción del popover
  optionSelected(option: string) {
    console.log('Opción seleccionada: ' + option);
  }
}