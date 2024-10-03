import { Component } from '@angular/core';
import { ListaUsuariosComponent } from "./lista-usuarios/lista-usuarios.component";
import { DetalleUsuariosComponent } from "./detalle-usuarios/detalle-usuarios.component";
import { User } from '../../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [ListaUsuariosComponent, DetalleUsuariosComponent],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {

  selectedUser: User | null = null;

  onUserSelected(user: User) {
    this.selectedUser = user;
  }

  onClearUser() {
    this.selectedUser = null;
  }
}
