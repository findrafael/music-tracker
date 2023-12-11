// components/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/Login_style';


const Login = ({ onLogin }) => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const navigation = useNavigation();


const login = async () => {
  try {

    const data = {
        email: username,
        password: password,
    };
    
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

export default Login;
