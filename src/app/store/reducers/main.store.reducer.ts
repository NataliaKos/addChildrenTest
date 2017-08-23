import { Reducer, Action } from 'redux';
import { AppState, initialState } from '../default.store.state';
import {
  ADD_CHILD,
  REMOVE_CHILD
} from '../actions/default.store.actions';

// Create our reducer that will handle changes to the state
export const mainReducer: Reducer<AppState> =
  (state: AppState = initialState, action: any): AppState => {
    switch (action.type) {
    case ADD_CHILD:
      return Object.assign({}, state, { 
          counter: state.counter + 1,
          children: [...state.children, ...action.children ] 
        });
    case REMOVE_CHILD:
    console.log(state.children, action.children)
      return Object.assign({}, { 
          counter: state.counter === 0 ? state.counter : state.counter-1,
          children: state.children.filter(child => child.id !== action.children)
        });
    default:
      return state;
    }
  };
