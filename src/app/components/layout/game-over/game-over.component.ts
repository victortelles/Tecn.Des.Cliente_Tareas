import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-over',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent {

  @Input() moves: number = 0;
  @Input() score: number = 0;
  @Input() time: string = '';

  @Output() startNewGame = new EventEmitter<void>();

  onStartNewGame() {
    this.startNewGame.emit();
  }
};
