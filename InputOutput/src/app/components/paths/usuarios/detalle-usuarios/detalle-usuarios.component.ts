import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../../services/usuarios.service';

@Component({
  selector: 'app-detalle-usuarios',
  standalone: true,
  imports: [CommonModule],
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
