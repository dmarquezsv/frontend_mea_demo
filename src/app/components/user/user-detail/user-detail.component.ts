import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

// Importamos nuestros módulos de usuario
import { UserInterface } from '../../../interfaces/user/user.interfaces';
import { UserService } from '../../../services/backend/user/user.service';
// RUTAS
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: UserInterface | null = null; // Almacena el usuario seleccionado
  private route = inject(ActivatedRoute); // Inyección de ActivatedRoute
  

  // Inyecta el servicio UserService
  constructor(private userService: UserService) {}

  ngOnInit(): void {

    // Escuchar cambios en el parámetro 'id' de la URL
    this.route.params.subscribe(params => {
      const userId = +params['id']; // Obtiene el parámetro 'id' como número
      if (userId) {
        this.getUserByID(Number(userId)); // Llama a la función para obtener datos del usuario
      }
    });
  /*  
  const userId = this.route.snapshot.paramMap.get('id');
  if (userId) {
    this.getUserByID(Number(userId)); // Llama al método para obtener el usuario
  }else{
    console.error('No se encontró un ID váilido en la URL');
  }
*/
  }
  
  getUserByID(userId: number): void {
    this.userService.getUserById(userId).subscribe({
      next: (result) => {
        this.user = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
