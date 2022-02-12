import React, {useContext} from 'react';
import GameContext, {defaultState} from './GameContext';

interface IGameProvider {
  children: React.ReactChild;
}

const GameProvider: React.FC<IGameProvider> = ({children}) => {
  const [dark, setDark] = React.useState(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <GameContext.Provider
      value={{
        dark,
        toggleDark,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
export default GameProvider;
