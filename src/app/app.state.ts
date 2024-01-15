import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { ChangeText } from './app.actions';

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
    console.log('change text in state', state);
    context.setState({
      ...state,
      text: '1',
    });
  }
}
