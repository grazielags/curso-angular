import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './Usuario/usuarios/usuarios.component';
import { UsuarioDetailComponent } from './Usuario/usuario-detail/usuario-detail.component';
import { UsuarioAddComponent } from './Usuario/usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './Usuario/usuario-edit/usuario-edit.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent,
    data: { title: 'Lista de Usuários' }
  },
  {
    path: 'usuario-details/:id',
    component: UsuarioDetailComponent,
    data: { title: 'Detalhes do Usuario' }
  },
  {
    path: 'usuario-add',
    component: UsuarioAddComponent,
    data: { title: 'Adicionar Usuario' }
  },
  {
    path: 'usuario-edit/:id',
    component: UsuarioEditComponent,
    data: { title: 'Editar Usuario' }
  },
  { path: '',
    redirectTo: '/usuarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
