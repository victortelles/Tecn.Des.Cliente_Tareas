import { Component, EventEmitter, Output } from '@angular/core';
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
  consecutiveMatches: number = 0;
  //num. Intentos
  @Output() movesChanged = new EventEmitter<number>();
  // Score
  @Output() scoreChanged = new EventEmitter<number>();

  constructor() {
    this.generateCards();
  }

  generateCards() {
    //Funcion para los la creacion de los pares.
    const contents = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    //Duplicar el arreglo para hacer los pares
    const pairedCards = [...contents, ...contents];

    // inicializar las cartas con su contenido y un ID.
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

    //No permitir el volteo si ya hay 2 cartas volteados
    if (this.flippedCardIndices.length < 2 && !card.isFlipped && !card.isMatched) {
      card.isFlipped = true;
      this.flippedCardIndices.push(index);
    }

    //Si se han volteado 2 cartas, establecer tiempo para validar
    if (this.flippedCardIndices.length === 2) {
      setTimeout(() => {
        this.checkForMatch()
        //Conteo de intentos
        this.movesChanged.emit(1);
      }, 1000);
    }
  }

  checkForMatch() {
    if (this.flippedCardIndices.length < 2) return;

    const [firstIndex, secondIndex] = this.flippedCardIndices;
    // Verificar si ambos índices son válidos
    const firstCard = this.cards[firstIndex];
    const secondCard = this.cards[secondIndex];

    if (firstCard.content === secondCard.content) {
      // Si coinciden, marcar como 'Matched'
      firstCard.isMatched = true;
      secondCard.isMatched = true;
      //Consecutivos score
      this.consecutiveMatches++;

      let points = 20;
      //Mecanica de dobles puntaje
      if (this.consecutiveMatches > 1) {
        points = 20 * this.consecutiveMatches;
      }
      this.scoreChanged.emit(points);

      //test
      console.log('Cartas coinciden: ', firstCard, secondCard);
    } else {
      // Si no coinciden, voltear de nuevo las cartas
      firstCard.isFlipped = false;
      secondCard.isFlipped = false;
      //Restar puntaje
      this.scoreChanged.emit(-5);
      this.consecutiveMatches = 0;
    }
    this.flippedCardIndices = [];
  }
}