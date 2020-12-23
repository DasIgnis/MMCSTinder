import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux"
import { FirestoreProvider } from "@react-firebase/firestore";

import store from "./store/store"

import WelcomeContainer from './containers/WelcomeContainer';
import LoginContainer from './containers/LoginContainer';
import UserCardContainer from './containers/UserCardContainer';
import RegisterContainer from './containers/RegisterContainer';
import EditProfileContainer from './containers/EditProfileContainer';
import FavsListContainer from './containers/FavsListContainer';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="baNaNa" 
              component={WelcomeContainer} 
              options={{title: "", headerBackTitleVisible: false, headerShown: false}}></Stack.Screen>
            <Stack.Screen 
              name="login" 
              component={LoginContainer} 
              options={{title: "Вход", headerBackTitleVisible: false}}></Stack.Screen>
            <Stack.Screen
              name="register"
              component={RegisterContainer}
              options={{title: "Регистрация", headerBackTitleVisible: false}}></Stack.Screen>
            <Stack.Screen 
              name="usercard" 
              component={UserCardContainer} 
              options={ ({navigation, route}) => ({
                        title: "", 
                        headerBackTitleVisible: false})}></Stack.Screen>
            <Stack.Screen
              name="profile"
              component={EditProfileContainer}
              options={{title: "Редактирование профиля", headerBackTitleVisible: false}}></Stack.Screen>
            <Stack.Screen
              name="favourites"
              component={FavsListContainer}
              options={{title: "Сохраненные пользователи", headerBackTitleVisible: false}}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
