import React from 'react';
import {Animated, PanResponder, View} from 'react-native';

interface SwipeGestureProps {
  onSwipePerformed: (action: string) => void;
  gestureStyle: any;
  children: React.ReactChild;
}

const SwipeGesture: React.FC<SwipeGestureProps> = ({
  onSwipePerformed,
  gestureStyle,
  children,
}) => {
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        let x = gestureState.dx;
        let y = gestureState.dy;
        if (Math.abs(x) > 10 || Math.abs(y) > 10) {
          if (Math.abs(x) > Math.abs(y)) {
            if (x > 0) {
              onSwipePerformed('right');
            } else {
              onSwipePerformed('left');
            }
          } else {
            if (y > 0) {
              onSwipePerformed('down');
            } else {
              onSwipePerformed('up');
            }
          }
        }
      },
    }),
  ).current;
  return (
    <Animated.View {...panResponder.panHandlers} style={gestureStyle}>
      <View>{children}</View>
    </Animated.View>
  );
};
export default SwipeGesture;
