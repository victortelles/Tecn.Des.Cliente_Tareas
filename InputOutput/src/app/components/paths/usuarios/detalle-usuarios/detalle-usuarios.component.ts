import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../../services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-detalle-usuarios',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
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
