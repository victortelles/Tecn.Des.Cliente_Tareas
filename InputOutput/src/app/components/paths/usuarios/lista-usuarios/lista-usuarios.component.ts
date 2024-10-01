import { Component, EventEmitter, Output } from '@angular/core';
import { UsuarioService, User } from '../../../../services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss'
})
export class ListaUsuariosComponent {
  users: User[] = [];
  selectedUserId: number | null = null;

  @Output() userSelected = new EventEmitter<User>();

  constructor(private userService: UsuarioService) {
    this.userService.getUser().subscribe(data => {
      this.users = data;
    });
  }

  selectUser(user: User){
    this.selectedUserId = user.id;
    this.userSelected.emit(user);
  }
}

