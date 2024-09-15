import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: { id: number, content: string, isFlipped: boolean, isMatched: boolean } = { id: 0, content: '', isFlipped: false, isMatched: false };
  @Input() flipCardHandler!: (cardId: number) => void;

  flipCard() {
    if(!this.card.isFlipped && !this.card.isMatched){
      this.flipCardHandler(this.card.id);
    }
  }
}
