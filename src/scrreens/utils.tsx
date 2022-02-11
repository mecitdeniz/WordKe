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
    default: {
      break;
    }
  }
};