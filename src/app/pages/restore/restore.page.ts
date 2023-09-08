import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage implements OnInit {
  email: string = '';

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  volver() {
    this.router.navigate(['login']);
  }

  async enviarEmail() {
    const emailRegex = /.*@.*/;

    if (!emailRegex.test(this.email)) {
      const toast = await this.toastController.create({
        message: 'Debe ingresar una dirección de correo electrónico válida',
        duration: 2000,
        position: 'bottom',
        color: 'medium'
      });
      await toast.present();
    } else {
      // Aquí puedes agregar la lógica para enviar el correo electrónico
      // Supongamos que has enviado el correo con éxito
      // Luego, muestra un mensaje de "Email enviado" utilizando otro toast
      await this.enviarCorreoElectronico(); // Reemplaza esto con tu lógica de envío de correo
    }
  }

  async enviarCorreoElectronico() {
    // Agrega aquí la lógica para enviar el correo electrónico
    // Supongamos que el correo se envió con éxito
    // Muestra un mensaje "Email enviado" en un toast
    const toast = await this.toastController.create({
      message: 'Email enviado',
      duration: 2000,
      position: 'bottom',
      color: 'success' // Puedes ajustar el color según tus preferencias
    });
    await toast.present();
  }
}
