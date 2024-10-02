import { Injectable } from '@angular/core';
import axios from 'axios';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';


  getUser(): Promise<User[]> {
    return axios.get<User[]>(this.apiUrl)
      .then(response => response.data)
      .catch(error => {
        console.error('Error al obtener usuarios', error);
        throw error;
      });
  }
}
