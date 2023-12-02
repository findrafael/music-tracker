// components/Summary.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Summary = ({ todos }) => {
  const countMap = todos.reduce((map, todo) => {
    const key = `${todo.title}-${todo.artistId}`;
    map[key] = (map[key] || 0) + 1;
    return map;
  }, {});

  const summaryData = Object.keys(countMap).map((key) => {
    const [title, artistId] = key.split('-');
    const artistName = getArtistNameById(artistId);
    
    return {
      key,
      title,
      artistId,
      artistName,
      scrobbles: countMap[key],
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo:</Text>
      {summaryData.map((item) => (
        <Text key={item.key} style={styles.summaryItem}>
          {`${item.title} - ${item.artistName} - Scrobbles: ${item.scrobbles}`}
        </Text>
      ))}
    </View>
  );
};

const getArtistNameById = (artistId) => {
  // Implemente a lógica para obter o nome do artista com base no ID
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

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryItem: {
    marginBottom: 5,
  },
});

export default Summary;