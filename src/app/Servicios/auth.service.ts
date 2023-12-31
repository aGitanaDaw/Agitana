import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'http://localhost:8080/auth';
  private authToken: string | null = null;
  private rol: string | null = '';
  private userTipo: string | null = '';
  private nombre:string | null = '';
  private id:string | null = '';
  private idPersona:string | null = '';

  constructor(private http: HttpClient) {
    this.authToken = localStorage.getItem('authToken');
  }

  login(username: string, password: string): Observable<any> {
    const credentials = {
      username: username,
      password: password,
    };
    console.log(credentials);
    return this.http.post(`${this.authUrl}/login`, credentials);
  }

  register(username: string, password: string, nombre: string, apellido1: string, apellido2: string, telefono: string, dni:string, tipo: BigInteger): Observable<any> {
    const credentials = {
      username:username,
      password:password,
      personaDTO:{
          nombre:nombre,
          apellido_Primero:apellido1,
          apellido_Segundo:apellido2,
          telefono:telefono,
          dni:dni,
          tipoPersona:tipo
      },
      tipoRol:1
  }
  
    console.log(credentials);
    return this.http.post(`${this.authUrl}/register`, credentials);
  }


  logoutS(): Observable<any> {
    return this.http.get(`${this.authUrl}/logout`);
  }
  
//--------------------------------------------------------------------------------------

  setAuthToken(token: string) {
    this.authToken = token;
    localStorage.setItem('authToken', token);
  }
  setAuthRol(rol: string) {
    this.rol = rol;
    localStorage.setItem('rol', rol);
  }
  setAuthUserType(userTipo: string) {
    this.userTipo = userTipo;
    localStorage.setItem('UserTipo', userTipo);
  }
  setAuthNombre(nombre: string) {
    this.nombre = nombre;
    localStorage.setItem('Nombre', nombre);
  }
  setAuthId(id: string) {
    this.id = id;
    localStorage.setItem('Id', id);
  }
  setAuthIdPersona(idPersona: string) {
    this.idPersona = idPersona;
    localStorage.setItem('IdPersona', idPersona);
  }
  

//--------------------------------------------------------------------------------------

  get Token() {
    return localStorage.getItem('authToken');
  }
  getAuthToken(): string | null {
    if (!this.authToken) {
      this.authToken = localStorage.getItem('authToken');
    }
    return this.authToken;
  }
  getAuthRol(): string | null {
    if (!this.rol) {
      this.rol = localStorage.getItem('rol');
    }
    return this.rol;
  }
  getAuthUserType(): string | null {
    if (!this.userTipo) {
      this.userTipo = localStorage.getItem('UserTipo');
    }
    return this.userTipo;
  }
  getAuthNombre(): string | null {
    if (!this.nombre) {
      this.nombre = localStorage.getItem('Nombre');
    }
    return this.nombre;
  }
  getAuthId(): string | null {
    if (!this.id) {
      this.id = localStorage.getItem('Id');
    }
    return this.id;
  }
  getAuthIdPersona(): string | null {
    if (!this.idPersona) {
      this.idPersona = localStorage.getItem('IdPersona');
    }
    return this.idPersona;
  }
 

  //---------------------------------------------------------------------------------------------------
  
  removeAuthToken() {
    this.authToken = null;
    localStorage.removeItem('authToken');
  }

  removeAuthRol() {
    this.rol = null;
    localStorage.removeItem('rol');
  }
  removeAuthUserType() {
    this.userTipo = null;
    localStorage.removeItem('UserTipo');
  }
  removeAuthNombre() {
    this.nombre = null;
    localStorage.removeItem('Nombre');
  }
  removeAuthId() {
    this.id = null;
    localStorage.removeItem('Id');
  }
  removeAuthIdPersona() {
    this.idPersona = null;
    localStorage.removeItem('IdPersona');
  }
  

//---------------------------------------------------------------------------

  checkCurrentRol(): boolean {
    console.log('entraaaaaa');
    if (!this.rol) {
      this.rol = localStorage.getItem('rol');
    }
    this.rol;
    console.log(this.rol);
    if (this.rol) {
      if (this.rol == 'ADMIN') {
        console.log('Usuario Admin');
        return true;
      } else if (this.rol == 'USER') {
        console.log('Usuario User con tipo Recibidor o Donante');
        return true;
      } else console.log('Usuario no autorizado 1');
      return false;
    }
    console.log('Usuario no autorizado 2');
    return false;
  }
}
