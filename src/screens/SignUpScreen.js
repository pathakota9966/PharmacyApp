/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Alert
} from 'react-native';

import auth from '@react-native-firebase/auth';
import AppContext from '../components/ProductContext';
import { StackActions } from '@react-navigation/native';


const SignUp =( navigation )=> {
    const [firstName, onChangeFNText] = React.useState('');
    const [lastName, onChangeLNText] = React.useState('');
  const [userEmail, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirmPassword, onChangePassword2] = React.useState('');
  const [dob, onChangeDOB] = React.useState('');
  const { LoggedIn } = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <View >
      <Text style={styles.title}>SignUp Screen</Text>
      <TextInput
        onChangeText={onChangeFNText}
        placeholder="First Name"
        value={firstName}
        style={styles.input}
      />
    <TextInput
        onChangeText={onChangeLNText}
        placeholder="Last Name"
        value={lastName}
        style={styles.input}
      />
      <TextInput
        onChangeText={onChangeText}
        placeholder="Email"
        autoCapitalize='none'
        value={userEmail}
        style={styles.input}
      />

      <TextInput
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
        autoCapitalize='none'
        secureTextEntry={true}
        style={styles.input}
      />

    <TextInput
        onChangeText={onChangePassword2}
        value={confirmPassword}
        placeholder="confirm password"
        autoCapitalize='none'
        style={styles.input}
      />

    <TextInput
        onChangeText={onChangeDOB}
        value={dob}
        placeholder="Date of Birth"
        style={styles.input}
      />

    <Button title="SignUp"
    onPress={() => {
      if(userEmail==0 && password == 0) {
        Alert.alert('Please enter username and passworde')
         return 
     }
   console.log("email is",userEmail );
   console.log("Password is ",password);
     auth()
     .createUserWithEmailAndPassword(userEmail, password)
     .then(() => {
       console.log("Logged In");
      //  LoggedIn()
       navigation.dispatch(StackActions.popToTop())
     })
     .catch(error => {
       if (error.code === 'auth/email-already-in-use') {
         console.log('That email address is already in use!');
       }
   
       if (error.code === 'auth/invalid-email') {
         console.log('That email address is invalid!');
       }
   
       console.error(error);
     });
    }}
    />
        {/* <Button title='Login' onPress={() => navigation.navigate('LoginScreen')}/> */}

      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#00FFFF",
      alignItems: "center",
      justifyContent: "center",
  },
  title: {
      fontSize: 40,
      color: "#fff",
      marginBottom: 20,
      fontWeight: "bold",
  },
  input: {
      backgroundColor: "#fff",
      padding: 10,
      marginTop: 15,
      color: "#000",
  },

});

export default SignUp;