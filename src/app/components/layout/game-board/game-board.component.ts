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
  cards: { id: number, content: string, isFlipped: boolean, isMatched: boolean }[] = [];
  flippedCardIndices: number[] = [];
  isProcessing: boolean = false;

  constructor() {
    this.generateCards();
  }

  generateCards() {
    //Funcion para los la creacion de los pares.
    const contents = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    //Duplicar el arreglo para hacer los pares
    const pairedCards = [...contents, ...contents];

    // Asignar un ID único a cada carta y mezclar el arreglo aleatoriamente
    this.cards = pairedCards.map((content, index) => ({
      id: index,
      content: content,
      isFlipped: false,
      isMatched: false,
    })).sort(() => Math.random() - 0.5);
  }

  //Funcion para voltear la carta
  flipCardHandler(index: number) {
    const card = this.cards[index];

    if (card.isFlipped || this.flippedCardIndices.length === 2) return;

    card.isFlipped = true;
    this.flippedCardIndices.push(index);

    if (this.flippedCardIndices.length === 2) {
      setTimeout(() => this.checkForMatch(), 1000);
    }
  }

  checkForMatch() {
    const [firstIndex, secondIndex] = this.flippedCardIndices;
    const firstCard = this.cards[firstIndex];
    const secondCard = this.cards[secondIndex];

    if (firstCard.content !== secondCard.content) {
      firstCard.isFlipped = false;
      secondCard.isFlipped = false;
    }

    this.flippedCardIndices = [];
  }
}