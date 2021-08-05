import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,FlatList,setText,setsubmit} from 'react-native';

const prueba1  = ()=> {
    return (
    <View style={styles.container}>
        <Text>holaMundo</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    paddingTop: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
});

export default card;