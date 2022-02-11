import { Animated, Easing } from "react-native";

export const getDestinaion = (action: string, index: number) => {
  switch (index) {
    case 0: {
      if (action === 'right') return 1;
      if (action === 'down') return 3;
      break;
    }
    case 1: {
      if (action === 'left') return 0;
      if (action === 'right') return 2;
      if (action === 'down') return 4;
      break;
    }
    case 2: {
      if (action === 'left') return 1;
      if (action === 'down') return 5;
      break;
    }
    case 3: {
      if (action === 'up') return 0;
      if (action === 'down') return 6;
      if (action === 'right') return 4;
      break;
    }
    case 4: {
      if (action === 'left') return 3;
      if (action === 'right') return 5;
      if (action === 'up') return 1;
      if (action === 'down') return 7;
      break;
    }
    case 5: {
      if (action === 'up') return 2;
      if (action === 'down') return 8;
      if (action === 'left') return 4;
      break;
    }
    case 6: {
      if (action === 'right') return 7;
      if (action === 'up') return 3;
      break;
    }
    case 7: {
      if (action === 'left') return 6;
      if (action === 'right') return 8;
      if (action === 'up') return 4;
      break;
    }
    case 8: {
      if (action === 'left') return 7;
      if (action === 'up') return 5;
      break;
    }
    default: {
      break;
    }
  }
};

export const move = (tileOne: number, tileTwo: number,positions:Animated.ValueXY[]) => {
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

// const callculatePositions = () => {
//   const positions: Animated.ValueXY[] = [];
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       const position = new Animated.ValueXY({x: j * 70, y: i * 70});
//       positions.push(position);
//       //console.log(position);
//     }
//   }
//   setPositions(positions);
// };