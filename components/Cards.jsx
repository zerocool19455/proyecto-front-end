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
});

const card = (props) => {
  const { srcImage, title, costo} = props;
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{
          uri: srcImage
        }} />
      <Text>{title}</Text>
      <Text>{costo}</Text>
    </View>
  )
}

export default card;