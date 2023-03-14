/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TextInput,
} from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import auth from '@react-native-firebase/auth';
import AppContext from '../components/ProductContext';
import { TouchableOpacity } from 'react-native';

export default function LoginScreen ({ navigation }) {

  const [userName, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const { isAuthenticated, updateValue, LoggedIn } = useContext(AppContext);

  useEffect(() => {
    updateValue()
    GoogleSignin.configure()
  },[])

  const logout=()=> {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  }

  const login=()=> {
    if(userName==0 && password == 0) {
      Alert.alert('Please enter username and passworde')
       return 
   }
 console.log("email is",userName );
 console.log("Password is ",password);
   auth()
   .signInWithEmailAndPassword(userName, password)
   .then(() => {
     console.log("Logged In");
     LoggedIn()
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
  };

  const fbLogin = (resCallback) => {
    LoginManager.logOut();
    LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log('result ==>>>>', result);
        if (result.declinedPermissions && result.declinedPermissions.includes("email")) {
          resCallback({ message: "Email is required" })
        }
        if (result.isCancelled) {
          console.log("error")
        } else {
          const infoRequest = new GraphRequest(
            '/me?fileds=email,name,picture,friend',
            null,
            resCallback
          );
          new GraphRequestManager().addRequest(infoRequest).start()
        }
      },
      function(error){
        console.log("Login fail with error: " + error)
      }
    )
  }

  const onFbLogin = async() => {
    try {
          await fbLogin(_responseInfoCallBack)
    } catch (error) {
          console.log("Error raised", error)
    }
  }

  const _responseInfoCallBack = async(error, result) => {
    if(error){
      console.log("error top", error)
      return;
    }
    else {
      const userData = result
      console.log("fb data++++",userData)
      navigation.navigate('List')
    }
}

const googleSignIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    // this.setState({ userInfo });
    console.log("user info", userInfo)
    LoggedIn();
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      console.log(error)
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      console.log(error)
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log(error)
    } else {
      // some other error happened
      console.log(error)
    }
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <View >
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        onChangeText={onChangeText}
        placeholder="User Name"
        autoCapitalize='none'
        value={userName}
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
      <Button title="Login" onPress={() => login()} />
      <Button title="Go to SignUp" onPress={() => navigation.navigate('SignUp')} /> 
      <View style={styles.socialButtons}>
      {/* <Button title="FB Login" onPress={onFbLogin} />
      <Button title="Google Login" onPress={googleSignIn} /> */}

      <TouchableOpacity onPress={onFbLogin} ><Image style={{ width: 60, height: 60, marginBottom: 15, borderRadius: 5, borderBottomWidth:1, borderColor: 'gray' }}
            source={require('../../assets/fblogo.png')} /></TouchableOpacity>
      <TouchableOpacity onPress={googleSignIn} ><Image style={{ width: 60, height: 60, marginLeft: 30, marginBottom: 15, borderRadius:20, borderRadius: 5, borderBottomWidth:1, borderColor: 'gray' }}
            source={require('../../assets/google-logo.png')} />
            </TouchableOpacity>
      
      </View>
      {isAuthenticated ? <Text>Flag : True </Text> : <Text>Flag :  False</Text>}
      
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
  socialButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: 30
  }
});

