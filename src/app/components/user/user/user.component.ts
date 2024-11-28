import { Component, OnInit, inject } from '@angular/core';

// Importamos nuestros módulos de usuarios
import { UserInterface } from '../../../interfaces/user/user.interfaces';
import { UserService } from '../../../services/backend/user/user.service';

// Sin CommonModule, no podrías usar las directivas más comunes de Angular,
// como *ngIf y *ngFor, porque no estarían disponibles en el contexto del componente.
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Módulo para utilizar los formularios

// RUTAS
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // Variable obtener todos los usuarios
  userList: UserInterface[] = [];

  // Variables para un usuario
  user: UserInterface | null = null; // Almacena el usuario seleccionado
  UserId: number | null = null; // Permite manejar la entrada como nulo al inicio

  // Inyectamos el Router correctamente
  private router = inject(Router);

  // Inyecta el servicio UserService
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  // Método para obtener la lista de usuarios del servicio
  getUsers(): void {
    this.userService.getUsers().subscribe({
      next: (result) => {
        this.userList = result; // Asigna el resultado
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
        alert('Hubo un error al obtener la lista de usuarios.');
      }
    });
  }

  // Método para obtener el usuario por ID y redirigir a la vista de detalle
  getUserByID(): void {
    if (this.UserId && this.UserId > 0) {
      this.userService.getUserById(this.UserId).subscribe({
        next: (result) => {
          this.user = result;
          console.log('Redirigiendo a:', `/user-detail/${this.UserId}`);
          // Redirige al detalle del usuario directamente sin llamar al servicio
         this.router.navigate(['/user-detail', this.UserId]);
        },
        error: (err) => {
          console.error('Error al obtener el usuario:', err);
          alert('No se encontró el usuario con el ID proporcionado.');
        }
      });
    } else {
      alert('Por favor, ingresa un ID válido.');
    }
  }
}

