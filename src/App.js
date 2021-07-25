import React, {useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Header from './components/Header';
import SaveComponent from './components/SaveComponent';
import Container from './constants/Container';
import CardComponent from './components/CardComponent';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [text, setOnChange] = useState();
  const [todo, setToDo] = useState([]);

  const handleText = value => {
    setOnChange(value);
  };

  const saveToDo = () => {
    const id = todo.length;
    setToDo([...todo, {id: id, name: text}]);
    setCounter(counter + 1);
  };

  const RenderCard = ({item}) => {
    return (
      <CardComponent
        item={item}
        handleCounter={setCounter}
        counter={counter}
        toDoList={todo}
        setToDo={setToDo}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Container>
        <Header counter={counter} />
        <FlatList data={todo} renderItem={RenderCard} />
        <SaveComponent handleText={handleText} saveToDo={saveToDo} />
      </Container>
    </SafeAreaView>
  );
}
