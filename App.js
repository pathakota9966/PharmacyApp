import React, { useContext, useState , useEffect} from 'react';

import { AppProvider } from './src/components/ProductContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './src/screens/SignUpScreen';
import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';
import CartScreen from './src/screens/CartScreen';
import Login from './src/screens/LoginScreen';
import AppContext from './src/components/ProductContext';
import LoginScreen from './src/screens/LoginScreen';
import { Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
const Stack = createNativeStackNavigator();

function PreAuthStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Sign In" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options= {{
   headerShown: false
}} />
    </Stack.Navigator>
  );
}

function PostAuthStack() {
  const { LoggedOut } = useContext(AppContext);
  const [isLoggedInWith, setLoggedInWith] = useState('')
const userLoggedInFrom = () => {
  AsyncStorage.getItem('isLoggedInWith', function (err, value) {
    if(err){
            console.log('Error in getting data');
    } else {
            console.log('......',value);
            setLoggedInWith(value)
            logoutFromApp();
    }
});
}
return (
  <Stack.Navigator>
     <Stack.Screen name="List" component={ListScreen} options= {{
 title: 'Products',
 headerTintColor: 'rgba(110,80,159,1)',
 headerRight: () => (
  <Button
    onPress={() => {
    console.log('logout pressed')
    LoggedOut()
  }}
    title="Logout"
    color="gray"
  />)}} />
    <Stack.Screen name="Detail" component={DetailScreen}  options= {{
 title: 'Products',
 headerTintColor: 'rgba(110,80,159,1)',
 headerRight: () => (
  <TouchableOpacity onPress={() => { LoggedOut() }}>
  <Image 
  style={{ width: 20, height: 20, marginBottom: 1, borderRadius: 1, borderBottomWidth:1, borderColor: 'gray' }}
  source={require('./assets/logout.png')}
  /></TouchableOpacity>
  )}}/>

    <Stack.Screen name="MyCart" component={CartScreen} options= {{
 title: 'Products',
 headerTintColor: 'rgba(110,80,159,1)',
 headerRight: () => (
  <TouchableOpacity onPress={() => { LoggedOut() }}>
  <Image 
  style={{ width: 20, height: 20, marginBottom: 1, borderRadius: 1, borderBottomWidth:1, borderColor: 'gray' }}
  source={require('./assets/logout.png')}
  /></TouchableOpacity>
  )}}/>
  </Stack.Navigator>
);
}

export default function App() {
  return (<AppProvider>
    <Navigation/>
    </AppProvider>);
};


function Navigation() {
  const { isAuthenticated } = useContext(AppContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <PostAuthStack /> : <PreAuthStack />}
    </NavigationContainer>
  );
}