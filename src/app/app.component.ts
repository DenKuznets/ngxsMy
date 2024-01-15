import { Component, OnInit } from '@angular/core';
import { Observable, withLatestFrom } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { AppState, ChangeText } from './app.state';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <p>
      {{ text }}
    </p>
    <div class="buttons">
      <button (click)="changeText()">1</button>
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
export class AppComponent implements OnInit {
  title = 'ngxsMy';

  text: string = 'hello';

  // store Обязательно делать private иначе ее не будет видно дальше в компоненте
  constructor(private store: Store) {}

  // @ts-ignore
  @Select(AppState) state$: Observable<AppStateType>;

  ngOnInit(): void {
    this.state$.subscribe({
      next: (x) => {
        console.log('component init', x);
        this.text = x.text;
      },
    });
  }

  changeText() {
    console.log('change text btn');
    this.store.dispatch(new ChangeText());
  }
}
