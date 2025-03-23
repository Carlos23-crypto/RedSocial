import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../Models/usuario.model';
import { UsuarioService } from '../Services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  nombreUsuario: string = '';
  contrasena: string = '';
  errorMessage: string = '';
  mostrarModal: boolean = false;

  // Usar el modelo de usuario
  nuevoUsuario: Usuario = new Usuario('', '', '', 0, '', '', null);

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  // Método para iniciar sesión
  onSubmit() {
    this.usuarioService.login(this.nombreUsuario, this.contrasena).subscribe(
      (response) =>/**/ {
        // Si el inicio de sesión es exitoso, redirigir a la página de inicio
        this.router.navigate(['/home']);
      },
      (error) => {
        // Si hay un error, mostrar un mensaje
        if (error.status === 401) {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        } else {
          this.router.navigate(['/home']);
        }
      }
    );
  }

  limpiarCampos() {
    this.nombreUsuario = '';
    this.contrasena = '';
    this.errorMessage = '';
  }

  // Métodos para manejar el modal de registro
  abrirRegistro(event: Event) {
    event.preventDefault();
    this.mostrarModal = true;
  }

  cerrarRegistro() {
    this.mostrarModal = false;
  }

  // Método para manejar la selección de archivos
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.nuevoUsuario.fotoPerfil = file;
    }
  }

  // Método para registrar un usuario
  registrarUsuario() {
    const formData = new FormData();

    // Agregar los datos del usuario al FormData
    formData.append('nombre', this.nuevoUsuario.nombre);
    formData.append('apellidoPat', this.nuevoUsuario.apellidoPat);
    formData.append('apellidoMat', this.nuevoUsuario.apellidoMat);
    formData.append('edad', this.nuevoUsuario.edad.toString());
    formData.append('usuario', this.nuevoUsuario.usuario);
    formData.append('password', this.nuevoUsuario.password);

    // Agregar la foto de perfil si está presente
    if (this.nuevoUsuario.fotoPerfil) {
      formData.append('fotoPerfil', this.nuevoUsuario.fotoPerfil);
    }

    // Enviar los datos al backend
    this.usuarioService.registrarUsuario(formData).subscribe(
      (response) => {
        console.log('Usuario registrado:', response);
        this.cerrarRegistro();
      },
      (error) => {
        console.error('Error al registrar el usuario:', error);
        this.errorMessage = 'Error al registrar el usuario. Inténtalo de nuevo.';
      }
    );
  }
}