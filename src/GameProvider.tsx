import React, {useContext, useReducer} from 'react';
import GameContext, {
  ActionType,
  IGameContext,
  initialState,
} from './GameContext';

import levels from './assets/levels.json';

interface IGameProvider {
  children: React.ReactChild;
}

const reducer = (state: IGameContext, action: ActionType): IGameContext => {
  switch (action.type) {
    case 'change_level':
      return {...state, level: state.level + 1};
    case 'set_puzzle':
      return {...state, puzzle: action.payload};
    case 'set_goal':
      return {...state, puzzle: action.payload};
    default:
      return state;
  }
};

const GameProvider: React.FC<IGameProvider> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeLevel = () => {
    dispatch({type: 'change_level'});
  };

  const getPuzzle = () => {
    const randomLevel = Math.floor(Math.random() * levels.length);
    console.log(randomLevel);
    dispatch({type: 'set_puzzle', payload: levels[randomLevel].state});
    dispatch({type: 'set_goal', payload: levels[randomLevel].goal});
  };

  return (
    <GameContext.Provider value={{...state, getPuzzle, changeLevel, dispatch}}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
export default GameProvider;
