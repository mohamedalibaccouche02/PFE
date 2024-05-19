import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Card, Text, Button } from 'react-native-paper';
import Feather from '@expo/vector-icons/Feather'; 
import { fetchAllChauffeurs } from '../../Louaji/api_Mobile/chauffeur_api';
import { useQuery } from 'react-query';
import { ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useChauffer } from '../Calendar/ChaufferContext';
const Loginpage = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const { username, setUsername, password, setPassword } = useChauffer();
  console.log(username, password); 
  const navigation = useNavigation();
  const { data, isLoading, isError} = useQuery('chauffeurs', fetchAllChauffeurs); 
   if (isError) {
    <Text>Error fetching dataa </Text> ; 

   } 

   else if (isLoading) {
    return  <ActivityIndicator/>

   } 

  
  const handleLogin = () => {
    if (!username || !password) {
      setError('Both username and password are required.');
      return;
    }
   if (!data.find(chauffeur => chauffeur.nom === username && chauffeur.motpasse === password)) {
    setError('Invalid username or password.');
    return;
   }
   
   else { 
    setError('');
    console.log('Username:', username, 'Password:', password);
    navigation.navigate('Calendar');
   }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image style={styles.logo} source={require('./logoo.jpg')} />
      </View>
      <Card style={styles.cardStyle}>
        <TextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          right={<TextInput.Icon icon="account" color="#052c51" />} />
          <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
          style={styles.input}
          right={<TextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} color="#052c51" onPress={() => setPasswordVisible(!passwordVisible)} />}         
          />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}

        >
          Login
        </Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ecbd4c',
  },
  topBar: {
    width: '100%',
    backgroundColor: '#052c51',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  cardStyle: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    marginTop: '40%',
    height: "40%",
    
  },
  logo: {
    width: 140,
    height: 40,
  },
  input: {
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#052c51',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Loginpage;