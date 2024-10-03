import { Injectable } from '@angular/core';
import axios from 'axios';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
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
