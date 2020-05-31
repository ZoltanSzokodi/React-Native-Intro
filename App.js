import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Clean the bathroom', id: '0' },
    { text: 'Buy groceries', id: '1' },
    { text: 'Video conference', id: '2' },
    { text: 'Pick up car from service', id: '3' },
    { text: 'Make dinner', id: '4' },
  ]);

  const pressHandler = id =>
    setTodos(prevState => prevState.filter(todo => todo.id !== id));

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevState => {
        return [
          {
            text,
            id: Math.random().toString(),
          },
          ...prevState,
        ];
      });
    } else {
      Alert.alert('OOPS', 'The todo must be min 4 chars long', [
        { text: 'OK', onPress: () => console.log('close dialog') },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          {/* Todo form */}
          <AddTodo handleSubmit={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={todo => todo.id}
              renderItem={({ item }) => (
                <TodoItem item={item} handlePress={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default App;
