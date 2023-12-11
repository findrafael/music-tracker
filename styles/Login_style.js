import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8', // Cor de fundo levemente cinza
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db', // Cor do título azul
  },
  input: {
    height: 40,
    borderColor: '#3498db', // Cor da borda azul
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: 200,
    borderRadius: 5, // Borda arredondada
  },
  button: {
    backgroundColor: '#3498db', // Cor de fundo do botão azul
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff', // Cor do texto do botão branca
  },
});
