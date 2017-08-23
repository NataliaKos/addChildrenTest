import {
  Action,
  ActionCreator
} from 'redux';

export const ADD_CHILD: string = 'ADD_CHILD';
export const addChild: ActionCreator<Action> = (child) => {
   return { 
    type: ADD_CHILD,
    children: child
   }
};

export const REMOVE_CHILD: string = 'REMOVE_CHILD';
export const removeChild: ActionCreator<Action> = (child) => {
   return { 
    type: REMOVE_CHILD,
    children: child
   }
};