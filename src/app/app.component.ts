import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameBoardComponent } from './components/layout/game-board/game-board.component';
import { CardComponent } from './components/layout/card/card.component';
import { ScoreComponent } from './components/layout/score/score.component';
import { TimerComponent } from './components/layout/timer/timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, GameBoardComponent, ScoreComponent, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'memorama';
}
