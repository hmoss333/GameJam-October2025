import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScoreWrapperComponent } from './components/score-wrapper/score-wrapper.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScoreWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jobs';
}
