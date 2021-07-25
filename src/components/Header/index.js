import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

const Header = ({counter}) => (
  <View style={styles.counterContainer}>
    <Text style={styles.text}>Yapilacaklar</Text>
    <Text style={styles.text}>{counter}</Text>
  </View>
);

export default Header;
