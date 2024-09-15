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
  flipCardHandler(cardId: number) {
    const card = this.cards[cardId];

    //No permitir el volteo si ya hay 2 cartas volteados
    if (this.flippedCardIndices.length < 2 && !card.isFlipped) {
      card.isFlipped = true;
      this.flippedCardIndices.push(cardId);
    }

    //Si se han volteado 2 carta, validar si son iguales
    if (this.flippedCardIndices.length === 2) {
      setTimeout(() => this.checkForMatch(), 1000);
    }
  }

  checkForMatch() {
    if (this.flippedCardIndices.length < 2) return;

    const [firstIndex, secondIndex] = this.flippedCardIndices;

    // Verificar si ambos índices son válidos
    const firstCard = this.cards[firstIndex];
    const secondCard = this.cards[secondIndex];

    if (!firstCard || !secondCard) {
      // Manejar si alguna carta es undefined
      console.error('Una de las cartas seleccionadas no existe.');
      this.flippedCardIndices = [];
      return;
    }

    if (firstCard.content === secondCard.content) {
      // Si coinciden, marcar como 'emparejadas'
      firstCard.isMatched = true;
      secondCard.isMatched = true;
    } else {
      // Si no coinciden, voltear las cartas
      firstCard.isFlipped = false;
      secondCard.isFlipped = false;
    }

    this.flippedCardIndices = [];
  }
}