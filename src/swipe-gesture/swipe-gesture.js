import React, {Component} from 'react';
import {View, Animated, PanResponder} from 'react-native';

export default class SwipeGesture extends Component {
  componentWillMount = () => {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        let x = gestureState.dx;
        let y = gestureState.dy;
        console.log('x', Math.abs(x), 'y', Math.abs(y));
        if (Math.abs(x) > 10 || Math.abs(y) > 10) {
          if (Math.abs(x) > Math.abs(y)) {
            if (x > 0) {
              this.props.onSwipePerformed('right');
            } else {
              this.props.onSwipePerformed('left');
            }
          } else {
            if (y > 0) {
              this.props.onSwipePerformed('down');
            } else {
              this.props.onSwipePerformed('up');
            }
          }
        }
      },
    });
  };

  render() {
    return (
      <Animated.View
        {...this.PanResponder.panHandlers}
        style={this.props.gestureStyle}>
        <View>{this.props.children}</View>
      </Animated.View>
    );
  }
}

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