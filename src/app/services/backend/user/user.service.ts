import { Injectable } from '@angular/core';// Importa Injectable para marcar la clase como inyectable

// Importaciones necesarias desde Angular y otros módulos
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para realizar solicitudes HTTP
import { Observable } from 'rxjs'; // Importa Observable para trabajar con flujos de datos asíncronos
import { UserInterface } from '../../../interfaces/user/user.interfaces'; // Importa la interfaz de usuario

// Marca la clase coo inyectable y especifica que debe estar disponible en el nivel raiz de la aplicacion
@Injectable({
  providedIn: 'root'
})

export class UserService {

 // URL de la API REST para la gestión de usuarios
 private readonly API_URL: string = 'http://localhost:8080/api/v1/user'; // Mejor declarado como readonly

 // Inyecta HttpClient en el constructor para poder usarlo en los métodos del servicio
 constructor(private httpClient: HttpClient) {}

 // Método para obtener la lista de usuarios
 getUsers(): Observable<UserInterface[]> {
   return this.httpClient.get<UserInterface[]>(this.API_URL);
 }

 //Obtener un usuario por su ID
 getUserById(id: number): Observable<UserInterface>{
  return this.httpClient.get<UserInterface>(`${this.API_URL}/${id}`);
 }

}
