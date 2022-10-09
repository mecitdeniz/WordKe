import {Animated, Easing} from 'react-native';

export interface IPosition {
  row: number;
  col: number;
}

export enum Tiles {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  DEFAULT,
}

export const tilePositions: Record<Tiles, IPosition> = {
  [Tiles.ZERO]: {row: 0, col: 0},
  [Tiles.ONE]: {row: 0, col: 1},
  [Tiles.TWO]: {row: 0, col: 2},
  [Tiles.THREE]: {row: 1, col: 0},
  [Tiles.FOUR]: {row: 1, col: 1},
  [Tiles.FIVE]: {row: 1, col: 2},
  [Tiles.SIX]: {row: 2, col: 0},
  [Tiles.SEVEN]: {row: 2, col: 1},
  [Tiles.EIGHT]: {row: 2, col: 2},
  [Tiles.DEFAULT]: {row: -1, col: -1},
};

export const isValidMove = (destination: IPosition) => {
  if (
    !destination ||
    JSON.stringify(destination).trim() ===
      JSON.stringify(tilePositions[9]).trim()
  )
    return false;
  return true;
};

export const getDestinaion = (
  action: string,
  tilePosition: IPosition,
): IPosition => {
  switch (JSON.stringify(tilePosition).trim()) {
    case JSON.stringify(tilePositions[0]).trim(): {
      if (action === 'right') return tilePositions[1];
      if (action === 'down') return tilePositions[3];
      break;
    }
    case JSON.stringify(tilePositions[1]).trim(): {
      if (action === 'left') return tilePositions[0];
      if (action === 'right') return tilePositions[2];
      if (action === 'down') return tilePositions[4];
      break;
    }
    case JSON.stringify(tilePositions[2]).trim(): {
      if (action === 'left') return tilePositions[1];
      if (action === 'down') return tilePositions[5];
      break;
    }
    case JSON.stringify(tilePositions[3]).trim(): {
      if (action === 'up') return tilePositions[0];
      if (action === 'down') return tilePositions[6];
      if (action === 'right') return tilePositions[4];
      break;
    }
    case JSON.stringify(tilePositions[4]).trim(): {
      if (action === 'left') return tilePositions[3];
      if (action === 'right') return tilePositions[5];
      if (action === 'up') return tilePositions[1];
      if (action === 'down') return tilePositions[7];
      break;
    }
    case JSON.stringify(tilePositions[5]).trim(): {
      if (action === 'up') return tilePositions[2];
      if (action === 'down') return tilePositions[8];
      if (action === 'left') return tilePositions[4];
      break;
    }
    case JSON.stringify(tilePositions[6]).trim(): {
      if (action === 'right') return tilePositions[7];
      if (action === 'up') return tilePositions[3];
      break;
    }
    case JSON.stringify(tilePositions[7]).trim(): {
      if (action === 'left') return tilePositions[6];
      if (action === 'right') return tilePositions[8];
      if (action === 'up') return tilePositions[4];
      break;
    }
    case JSON.stringify(tilePositions[8]).trim(): {
      if (action === 'left') return tilePositions[7];
      if (action === 'up') return tilePositions[5];
      break;
    }
    default: {
      return tilePositions[9];
    }
  }
  return tilePositions[9];
};

export const move = (
  tileOne: number,
  tileTwo: number,
  positions: Animated.ValueXY[],
) => {
  const posOne = positions[tileOne];
  const posTwo = positions[tileTwo];
  const destOne = positions[tileOne];
  const destTwo = positions[tileTwo];

  Animated.parallel([
    Animated.timing(posOne, {
      toValue: {
        x: parseInt(JSON.stringify(destTwo.x)),
        y: parseInt(JSON.stringify(destTwo.y)),
      },
      easing: Easing.elastic(0.5),
      useNativeDriver: false,
      duration: 200,
    }),
    Animated.timing(posTwo, {
      toValue: {
        x: parseInt(JSON.stringify(destOne.x)),
        y: parseInt(JSON.stringify(destOne.y)),
      },
      easing: Easing.elastic(0.5),
      useNativeDriver: false,
      duration: 200,
    }),
  ]).start();
};
