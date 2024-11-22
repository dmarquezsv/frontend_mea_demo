import { Injectable } from '@angular/core';

// Importaciones necesarias desde Angular y otros módulos
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para realizar solicitudes HTTP
import { Injectable } from '@angular/core'; // Importa Injectable para marcar la clase como inyectable
import { Observable } from 'rxjs'; // Importa Observable para trabajar con flujos de datos asíncronos
import { UserInterface } from '../interfaces/user/user.interfaces'; // Importa la interfaz de usuario

// Marca la clase coo inyectable y especifica que debe estar disponible en el nivel raiz de la aplicacion
@Injectable({
  providedIn: 'root'
})

export class UserService {

  // URL de la api rest de los gestión de usuarios
  API_URL: string = 'http://localhost:8080/api/v1/user/';

   // Inyecta HttpClient en el constructor para poder usarlo en los métodos del servicio
  constructor(private httpClient: HttpClient) {}
}
