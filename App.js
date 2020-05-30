import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Zoltan', id: '1' },
    { name: 'Szili', id: '2' },
    { name: 'Erzsi', id: '3' },
    { name: 'Rupert', id: '4' },
    { name: 'Robin', id: '5' },
    { name: 'Andras', id: '6' },
    { name: 'Szabolcs', id: '7' },
    { name: 'Aranka', id: '8' },
    { name: 'Dani', id: '9' },
    { name: 'Rozsi', id: '10' },
  ]);

  const pressHandler = id => {
    setPeople(prevState => {
      return prevState.filter(p => p.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  item: {
    backgroundColor: 'pink',
    fontSize: 24,
    padding: 20,
    margin: 20,
  },
});
