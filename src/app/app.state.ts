import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

export interface AppStateType {
  text: string;
}

@State<AppStateType>({
  name: 'appstate',
  defaults: {
    text: 'hello world',
  },
})
@Injectable()
export class AppState {
  @Action(ChangeText)
  changeText(context: StateContext<AppStateType>) {
    const state = context.getState();
    console.log(state);
  }
}

export class ChangeText {
  static readonly type = '[App] Change Text';
}
