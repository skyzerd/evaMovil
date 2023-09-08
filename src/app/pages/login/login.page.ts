import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, IonRouterOutlet } from '@ionic/angular'; // Importa ToastController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_usuario: string = '';
  mdl_contrasena: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController, // Importa ToastController
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    // Restablece los campos de usuario y contraseña cada vez que vuelvas a la página
    this.mdl_usuario = '';
    this.mdl_contrasena = '';
  }

  async navegar() {
    if (this.mdl_usuario !== '' && this.mdl_contrasena !== '') {
      // Pasa el usuario como parte del estado en la navegación
      const navigationExtras = {
        state: {
          user: this.mdl_usuario,
        },
      };

      this.router.navigate(['home'], navigationExtras);
    } else {
      // Muestra un toast en lugar de la alerta si el usuario o la contraseña están vacíos
      const toast = await this.toastController.create({
        message: 'Debe ingresar usuario y contraseña',
        duration: 2000, // Duración en milisegundos (2 segundos en este ejemplo)
        position: 'bottom', // Cambia la posición a "abajo" o según tu preferencia
        color: 'medium' // Cambia el color del toast a tu elección (por ejemplo, 'danger' para rojo)
      });

      await toast.present();
    }
  }

  recuperar() { 
    this.router.navigate(['restore']);
  }
}

