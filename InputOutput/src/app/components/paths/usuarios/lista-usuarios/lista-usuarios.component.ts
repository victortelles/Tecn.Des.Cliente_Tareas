import { Component, EventEmitter, Output } from '@angular/core';
import { UsuarioService, User } from '../../../../services/usuarios.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
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

