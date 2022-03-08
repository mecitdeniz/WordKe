import {createContext} from 'react';
export interface ActionType {
  type: string;
  payload?: any;
}

export interface IGameContext {
  level: number;
  puzzle: string[][];
  goal: string[][];
  changeLevel: () => void;
  getPuzzle: () => void;
  setPuzzle: (puzzle: string[][]) => void;
  setGoal: (goal: string[][]) => void;
  dispatch: (action: ActionType) => void;
}

export const initialState = {
  level: 0,
  puzzle: [[], [], []],
  goal: [[], [], []],
  changeLevel: () => {},
  setPuzzle: () => {},
  dispatch: () => {},
  getPuzzle: () => {},
  setGoal: () => {},
};

const GameContext = createContext<IGameContext>(initialState);

export default GameContext;
