import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Main from './src/pages/Main';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor="#8B10AE" />
    <Main />
    </>
  );
}

