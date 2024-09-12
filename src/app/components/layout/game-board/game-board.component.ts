import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss'
})
export class GameBoardComponent {
  //Arreglo de 20 cartas
  cards = Array.from({ length: 20 }, (_, i) => ({ id: i, content: `Card ${i + 1}` }));
}
