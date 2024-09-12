import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private moves = 0;
  private matches = 0;

  incrementMoves(): void {
    this.moves++;
  }

  incrementMatches(): void {
    this.matches++;
  }

  getMoves(): number {
    return this.moves;
  }

  getMatches(): number {
    return this.matches;
  }
}
