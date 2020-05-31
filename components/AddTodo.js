import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddTodo = ({ handleSubmit }) => {
  const [text, setText] = useState('');

  const changeHandler = val => setText(val);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='type todo...'
        onChangeText={changeHandler}
      />
      <Button
        title='add todo'
        color='coral'
        onPress={() => handleSubmit(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default AddTodo;
