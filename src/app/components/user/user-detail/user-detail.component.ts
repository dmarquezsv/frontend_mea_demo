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
  private router = inject(Router); // Inyección de Router para redirección

  // Inyecta el servicio UserService
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
  if (userId) {
    this.getUserByID(Number(userId)); // Llama al método para obtener el usuario
  }
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
