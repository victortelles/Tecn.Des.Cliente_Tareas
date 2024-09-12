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
  cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
}
