import React from 'react';
import {View} from 'react-native';

import styles from './style';

const Container = ({children, style}) => (
  <View style={[styles.container, style]}>{children}</View>
);

export default Container;
