import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <p>hello world</p>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </div>
  `,

  // styleUrl: './app.component.scss',
  styles: `
    .buttons{
      display: flex;
      gap: 20px;
    }
  `,
})
export class AppComponent {
  title = 'ngxsMy';
}
