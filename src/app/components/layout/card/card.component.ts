import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() cardFlipped = new EventEmitter<number>();

  flipCard() {
    this.cardFlipped.emit(this.card.id);
  }
}
