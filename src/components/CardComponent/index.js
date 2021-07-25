import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {COLORS} from '../../constants/theme';

import styles from './style';

const CardComponent = ({item, handleCounter, counter, toDoList, setToDo}) => {
  const [selectedId, setSelectedId] = useState([]);

  const backgroundColor =
    selectedId.indexOf(item.id) > -1 ? COLORS.gray : COLORS.green;
  const textDecorationLine =
    selectedId.indexOf(item.id) > -1 ? 'line-through' : 'none';

  const handlePress = () => {
    setSelectedId([...selectedId, item.id]);
    if (selectedId.indexOf(item.id) == -1) {
      handleCounter(counter - 1);
    }
  };

  const handleRemoveItem = id => {
    if (selectedId.indexOf(item.id) > -1) {
      setToDo(toDoList.filter(item => item.id !== id));
      alert('Silindi');
    }
  };

  return (
    <TouchableOpacity
      onLongPress={() => handleRemoveItem(item.id)}
      onPress={handlePress}
      style={[styles.card, {backgroundColor}]}>
      <Text style={[styles.cardTitle, {textDecorationLine}]}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CardComponent;
