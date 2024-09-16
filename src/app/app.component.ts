import { Component, ViewChild } from '@angular/core';
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
  score: number = 0;

  @ViewChild(TimerComponent) timerComponent!: TimerComponent;

  // Numero de intentos
  onMovesChanged(movesCount: number) {
    this.moves += movesCount;
  }

  //Match de cartas
  onMatchesChanged(matches: number): void {
    this.matches = matches;
  }

  //score
  onScoreChanged(scoreIncrement: number) {
    this.score += scoreIncrement;
  }

  //Timer
  startTimer() {
    if (this.timerComponent) {
      this.timerComponent.startTimer();
    }
  }

  stopTimer() {
    if (this.timerComponent) {
      this.timerComponent.stopTimer();
    }
  }

}
