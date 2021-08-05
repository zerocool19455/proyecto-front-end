import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 1,
      paddingTop: 15,
      paddingHorizontal: 30,
      borderRadius: 20,
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
      borderColor: 'black',
      borderWidth: 1,
    },
    titulo:{
        alignItems: 'center',  
        justifyContent: 'center',
        height:40,
        width:'100%',
        color:'red',
    },
    texto:{
      
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
      borderColor: 'black',
      borderWidth: 1,
    }
  }); 
  
const DetailCard = ()=>{
  return (<View>
  <Text style={styles.titulo}>Titulo</Text>
  <Text style={styles.texto}>holamundo</Text>
  <Image 
        style={styles.image}
        source={{
          uri: 'https://cdn.cheapism.com/images/050418_coca_cola_facts_slide_0_fs.max-800x600.jpg'
        }} />
  </View>
  )
}
export default DetailCard;

