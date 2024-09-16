import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  time: string = '00:00';
  private timer: any;
  private seconds: number = 0;

  @Output() timeStopped = new EventEmitter<string>();

  ngOnInit() {
    //inicializar tiempo
    this.updateDisplay();
  }

  ngOnDestroy() {
    //detener el timer
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  startTimer() {
    //Limpiar si existe algun tiempo
    if (this.timer) {
      clearInterval(this.timer);
    }

    //Iniciar timer
    this.timer = setInterval(() => {
      this.seconds++;
      this.updateDisplay();
    }, 1000);
  }

  stopTimer() {
    //Detener timer
    if (this.timer) {
      clearInterval(this.timer);
    }
    //emitir evento
    this.timeStopped.emit(this.time);
  }

  private updateDisplay() {
    const minutes = Math.floor (this.seconds / 60);
    const seconds = this.seconds % 60;
    this.time =  `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }
}
