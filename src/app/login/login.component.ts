import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para redirigir
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  nombreUsuario: string = '';
  contrasena: string = '';
  errorMessage: string = '';
  mostrarModal: boolean = false;

  nuevoUsuario = {
    nombre: '',
    apellidoPat: '',
    apellidoMat: '',
    edad: null,
    usuario: '',
    password: ''
  };

  constructor(private router: Router) {} // Inyecta el servicio Router

  onSubmit() {
    // Lógica de autenticación (simulada)
    if (this.nombreUsuario === 'Carlos' && this.contrasena === '1234') {
      // Redirigir a la página home
      this.router.navigate(['/home']);
    } else {
      // Mostrar mensaje de error si las credenciales son incorrectas
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }

  limpiarCampos() {
    this.nombreUsuario = '';
    this.contrasena = '';
    this.errorMessage = ''; // Limpiar el mensaje de error al limpiar los campos
  }

  // Métodos para manejar el modal de registro
  abrirRegistro(event: Event) {
    event.preventDefault();
    this.mostrarModal = true;
  }

  cerrarRegistro() {
    this.mostrarModal = false;
  }

  registrarUsuario() {
    console.log('Usuario registrado:', this.nuevoUsuario);
    this.cerrarRegistro();
  }
}
