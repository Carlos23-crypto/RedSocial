// src/app/models/usuario.model.ts
export class Usuario {
    constructor(
      public nombre: string,
      public apellidoPat: string,
      public apellidoMat: string,
      public edad: number,
      public usuario: string,
      public password: string,
      public fotoPerfil: File | null = null // Campo opcional para la foto de perfil
    ) {}
  }