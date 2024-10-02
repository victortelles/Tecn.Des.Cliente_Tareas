import { Component, EventEmitter, Output } from '@angular/core';
import { UsuarioService, User } from '../../../../services/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent {
  users: User[] = [];
  selectedUserId: number | null = null;

  @Output() userSelected = new EventEmitter<User>();

  constructor(private userService: UsuarioService) {
    this.loadUsers();
  }

  async loadUsers(){
    try {
      this.users = await this.userService.getUser();
    } catch (error) {
      console.error('error al cargar usuarios', error);
    }
  }

  selectUser(user: User){
    this.selectedUserId = user.id;
    this.userSelected.emit(user);
  }
}

