import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../services/usuarios.service';

@Component({
  selector: 'app-detalle-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './detalle-usuarios.component.html',
  styleUrl: './detalle-usuarios.component.scss'
})

export class DetalleUsuariosComponent {
  @Input() selectedUser: User | null = null;
  @Output() clearUser = new EventEmitter<void>();

  clearSelection() {
    this.clearUser.emit()
  }
}
