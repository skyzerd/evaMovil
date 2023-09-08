import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string = ''; // Inicializa la propiedad usuario
  elementos: any[] = [
    { nombre: 'Base de datos', imagenUrl: 'assets/imagenes/imagen1.jpg' },
    { nombre: 'Desarrollo web', imagenUrl: 'assets/imagenes/imagen2.jpg' },
    { nombre: 'Aplicaciones moviles', imagenUrl: 'assets/imagenes/imagen3.jpg' },
    // Agrega más elementos según sea necesario
  ];
  seleccion: any = null;
  mostrarLista: boolean = false; // Agregamos una variable para controlar la visualización de la lista

  constructor(private router: Router) {
    // Intenta obtener el usuario de la ruta actual
    const state = this.router.getCurrentNavigation()?.extras.state;
    
    if (state && state['user']) {
      this.usuario = state['user'];
    }
  }

  ngOnInit() {
  }

  // Función para mostrar la lista al hacer clic en el botón
  mostrarOcultarLista() {
    this.seleccion = null;
    this.mostrarLista = !this.mostrarLista;
  }

  volver() {
    this.router.navigate(['login']);
  }
}
