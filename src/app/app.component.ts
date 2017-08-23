import { Component, Inject } from '@angular/core';

import * as Redux from 'redux';
import { AppStore } from './store/main.store';
import { AppState } from './store/default.store.state';
import * as MainActions from './store/actions/default.store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;
  children: Array<any>;
  haveChild: string;
  firstName: Array<any> = [];
  lastName: Array<any> = [];
  addMore: Array<any> = ['true'];
  haveMore: boolean = false;
  saved: Array<any> = [];
  newChild: Array<any> = [
                            {
                              'firstName': '',
                              'lastName': '',
                              'id': this.counter
                            }
                          ];

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
    this.children = state.children;

    if (this.children.length === 0){
      this.children = this.newChild;
    }
  }

  cancel() {
    this.haveChild = 'no';
  }

  addChild(childName, childLastName, index) {
    if (childName && childLastName) {
      this.saved[this.counter-1] = true;
      this.saved[this.counter] = true;
      this.haveMore = true;
      this.store.dispatch(MainActions.addChild({ 'firstName': childName, 'lastName': childLastName, 'id': index }));
    }
  }

  addMoreChild(haveMoreChild) {
    if (haveMoreChild === 'true') {
        this.newChild = [
                          {
                            'firstName': '',
                            'lastName': '',
                            'id': this.counter
                          }
                        ];
      this.children = [ ...this.children, ...this.newChild ];
      this.addMore[this.counter] = true;
      this.saved[this.counter] = false;
      this.haveMore = false;
    }
  }

  removeChild(index) {
    if (index > -1) {
      this.haveMore = true;
      this.saved[this.counter] = false;
      this.store.dispatch(MainActions.removeChild(index));
      if (this.counter === 0){
        this.haveChild = 'no';
      }
    }
  }
}
