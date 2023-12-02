// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoList from '../components/TodoList';
import Summary from '../components/Summary';

const HomeScreen = () => {
  const [newTodo, setNewTodo] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('@todos');
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    };

    loadTodos();
  }, []);

  const getArtistNameById = (artistId) => {
    switch (artistId) {
      case '1':
        return 'Ethel Cain';
      case '2':
        return 'Lorde';
      case '3':
        return 'Allie X';
      case '4':
        return 'Lana del Rey';
      case '5':
        return 'iamamiwhoami';
      default:
        return 'Desconhecido';
    }
  };

  const addTodo = async () => {
    if (newTodo.trim() !== '' && selectedArtist !== null) {
      const newTodoItem = {
        id: Date.now(),
        title: newTodo,
        artistId: selectedArtist,
        artistName: getArtistNameById(selectedArtist),
      };

      setTodos([...todos, newTodoItem]);
      setNewTodo('');
      setSelectedArtist(null);

      try {
        await AsyncStorage.setItem(
          '@todos',
          JSON.stringify([...todos, newTodoItem])
        );
      } catch (error) {
        console.error('Error saving todo:', error);
      }
    }
  };

  const deleteTodo = async (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    try {
      await AsyncStorage.setItem('@todos', JSON.stringify(updatedTodos));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music Tracker</Text>
      <Text style={styles.subtitle}>Registre suas músicas favoritas!</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite uma música"
        value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
      />
      <Picker
        selectedValue={selectedArtist}
        onValueChange={(itemValue) => setSelectedArtist(itemValue)}
      >
        <Picker.Item label="Selecione um artista" value={null} />
        <Picker.Item label="Ethel Cain" value="1" />
        <Picker.Item label="Lorde" value="2" />
        <Picker.Item label="Allie X" value="3" />
        <Picker.Item label="Lana del Rey" value="4" />
        <Picker.Item label="iamamiwhoami" value="5" />
      </Picker>
      <Button title="Add Todo" onPress={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
      <Summary todos={todos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#3498db',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#3498db',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  picker: {
    height: 40,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#3498db',
    borderWidth: 1,
  },
});

export default HomeScreen;
