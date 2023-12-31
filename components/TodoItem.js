
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/TodoItem_style';

const TodoItem = ({ title, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;