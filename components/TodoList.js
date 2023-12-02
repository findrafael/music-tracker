// components/TodoList.js
import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete }) => {
  return (
    <>
      <Text style={styles.title}>Músicas recém adicionadas:</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            title={`${item.title} - ${item.artistName}`}
            onDelete={() => onDelete(item.id)}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default TodoList;
