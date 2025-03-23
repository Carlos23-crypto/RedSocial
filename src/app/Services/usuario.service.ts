import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8088/usuarios'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) {}

  // Método para validar el inicio de sesión
  login(nombreUsuario: string, contrasena: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { nombreUsuario, contrasena });
  }

  // Método para registrar un usuario
  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, usuario);
  }
}