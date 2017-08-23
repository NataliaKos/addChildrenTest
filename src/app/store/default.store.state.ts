export interface AppState {
  counter: number;
  children: Array<any>
};

export const initialState: AppState = { 
    counter: 0,
    children: []
};