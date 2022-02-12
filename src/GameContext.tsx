import React, {createContext} from 'react';

export interface IGameContext {
  dark: boolean;
  toggleDark?: () => void;
}

export const defaultState = {
  dark: false,
};

const GameContext = createContext<IGameContext>(defaultState);

export default GameContext;
