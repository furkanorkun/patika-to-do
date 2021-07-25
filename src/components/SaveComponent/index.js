import React from 'react';
import {View, TextInput, Button} from 'react-native';

import styles from './style';

const SaveComponent = ({saveToDo, handleText}) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      onChangeText={handleText}
      placeholder="Yapılacaklar"
    />
    <Button onPress={saveToDo} color="gray" title="Kaydet" />
  </View>
);

export default SaveComponent;
