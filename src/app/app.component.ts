import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScoreComponent } from './components/layout/score/score.component';
import { TimerComponent } from './components/layout/timer/timer.component';
import { GameBoardComponent } from './components/layout/game-board/game-board.component';
import { AttemptsComponent } from './components/layout/attempts/attempts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScoreComponent, GameBoardComponent, TimerComponent, AttemptsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'memorama';
  moves: number = 0;
  matches = 0;

  onMovesChanged(movesCount: number) {
    this.moves += movesCount;
  }

  onMatchesChanged(matches: number): void {
    this.matches = matches;
  }
}
