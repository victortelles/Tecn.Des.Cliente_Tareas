import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScoreComponent } from './components/layout/score/score.component';
import { TimerComponent } from './components/layout/timer/timer.component';
import { GameBoardComponent } from './components/layout/game-board/game-board.component';
import { AttemptsComponent } from './components/layout/attempts/attempts.component';
import { GameOverComponent } from './components/layout/game-over/game-over.component';
import { CommonModule } from '@angular/common';
import { ConfettiService } from './components/effects/confetti.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ScoreComponent, GameBoardComponent, TimerComponent, AttemptsComponent, GameOverComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'memorama';
  moves: number = 0;
  matches = 0;
  score: number = 0;
  time: string = '';
  gameOver: boolean = false;

  @ViewChild(TimerComponent) timerComponent!: TimerComponent;

  //confetti
  constructor(private confettiService: ConfettiService) {}

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
    this.timerComponent.startTimer();
  }

  stopTimer() {
    this.timerComponent.stopTimer();
  }

  //GameOver
  onGameFinished(){
    this.gameOver = true;
    this.confettiService.celebrate();
  }

  //start game
  startNewGame() {
    location.reload();
  }

  onTimeStopped(finalTime: string) {
    this.time = finalTime;
  }

  //Reset
  resetGame() {
    this.moves = 0;
    this.score = 0;
    this.time = '';
    if (this.timerComponent){
      this.timerComponent.stopTimer();
      this.timerComponent.startTimer();
    }
  }
}
