import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {
  cards: {id: number, content: string } [] = [];

    constructor () {
      this.generateCards();
    }

    generateCards() {
      //Funcion para los la creacion de los pares.
      const contents = ['1','2','3','4','5','6','7','8','9','10'];

      //Duplicar el arreglo para hacer los pares
      const pairedCards = [...contents, ...contents];

    // Asignar un ID único a cada carta y mezclar el arreglo aleatoriamente
    this.cards = pairedCards.map((content, index) => ({
      id: index,
      content: content
    })).sort(() => Math.random() - 0.5);
  }
}