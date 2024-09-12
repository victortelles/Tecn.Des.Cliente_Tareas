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
  cards = [
    {content: 'Card 1'},
    {content: 'Card 2'},
    {content: 'Card 3'},
    {content: 'Card 4'},
    {content: 'Card 5'},
    {content: 'Card 6'},
    {content: 'Card 7'},
    {content: 'Card 8'},
    {content: 'Card 9'},
    {content: 'Card 10'},
    {content: 'Card 11'},
    {content: 'Card 12'},
    {content: 'Card 13'},
    {content: 'Card 14'},
    {content: 'Card 15'},
    {content: 'Card 16'},
    {content: 'Card 17'},
    {content: 'Card 18'},
    {content: 'Card 19'},
    {content: 'Card 20'},
  ]
}
