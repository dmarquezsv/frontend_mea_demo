import { Routes } from '@angular/router';

//importamos el modulo de mostrar detalle de usuario
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';

export const routes: Routes = [
  
  {
    path: 'user-detail/:id',
    component:UserDetailComponent,
    title:'Detalle de Usuario'
  },{
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
     
];
