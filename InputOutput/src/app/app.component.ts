import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { UsuariosComponent } from './components/paths/usuarios/usuarios.component';
import { ListaUsuariosComponent } from './components/paths/usuarios/lista-usuarios/lista-usuarios.component';
import { DetalleUsuariosComponent } from './components/paths/usuarios/detalle-usuarios/detalle-usuarios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, UsuariosComponent, ListaUsuariosComponent, DetalleUsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'InputOutput';
}
