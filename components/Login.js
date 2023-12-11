// components/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = ({ onLogin }) => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const navigation = useNavigation();


const login = async () => {
  try {
    // Construa o objeto de dados para a requisição
    /*const data = {
        email: username,
        password: password,
    };*/

    const data = {
        "email": "fulano@qa.com",
        "password": "teste"
      }
    
    const response = await fetch('https://serverest.dev/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      console.log('Login realizado com sucesso!');
      alert('Login realizado com sucesso!');
      navigation.navigate('Home');
    } else {
      console.error('Falha no login. Credenciais inválidas.');
    }
  } catch (error) {
    console.log('Erro durante o login:', error.message);
  }
};


  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Entrar" onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: 200,
  },
});

export default Login;
