import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attempts',
  standalone: true,
  imports: [],
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.scss']
})
export class AttemptsComponent {
  @Input() attempts: number = 0;

}
