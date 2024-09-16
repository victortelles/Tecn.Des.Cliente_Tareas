import { Injectable } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root',
})
export class ConfettiService {
  private confettiInstance: any;

  constructor() {
    this.confettiInstance = confetti.create(undefined, {resize: true});
  }

  celebrate() {
    const duration = 5000;

    this.confettiInstance({
      particleCount: 150,
      spread: 180,
      origin: { y: 0.6 },
      colors: ['#FF4500', '#008080', '#FFD700'],
    });

    setTimeout(() => confetti.reset(), duration);
  }
}
