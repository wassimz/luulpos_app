import React from 'react';
import { Animated, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import AppBase from './AppBase';
import { Images, Colors } from '../Themes';

class LoadingProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.spin();
  }

  spin = () => {
    Animated.sequence([
      Animated.timing(this.state.spinValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.spinValue, {
        toValue: 0,
        delay: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(() => this.spin());
  };

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <AppBase
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.grey,
        }}
      >
        <Animated.Image
          source={Images.placeholderFood}
          style={{
            width: 120,
            height: 120,
            transform: [{ rotate: spin }],
          }}
        />
        <View
          style={{
            width: 80,
            minHeight: 10,
            borderRadius: 5,
            backgroundColor: '#fff',
            shadowColor: '#dcddcc',
            shadowRadius: 0,
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 10 },
          }}
        />
      </AppBase>
    );
  }
}

LoadingProducts.propTypes = {};

export default LoadingProducts;
