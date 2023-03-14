import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
} from 'react-native';

export const Login =({ navigation })=> {

    const [userName, onChangeText] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
          <View >
          <Text style={styles.title}>Login Screen</Text>
          <TextInput
            onChangeText={onChangeText}
            placeholder="User Name"
            value={userName}
            style={styles.input}
          />
    
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            placeholder="password"
            secureTextEntry={true}
            style={styles.input}
          />
    
    <Button title="Login"
      onPress={() => navigation.navigate('List')}
    />
    
    <Button title="Go to SignUp"  
            onPress={() => navigation.navigate('SignUp')}
            /> 
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