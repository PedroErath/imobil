import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import backgroundImage from '../images/loading-page-image.jpg';

function LoadingPage() {
  return (
    <View style={style.container}>
      <ImageBackground source={backgroundImage} resizeMode='cover' blurRadius={4} style={style.backgroundImage}>
        <Text style={style.title}>IMOBIL</Text>
      </ImageBackground>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  title:{
    fontSize: 64,
    color: '#197B5C',
    fontFamily: "Montserrat-Bold"
  }
})

export default LoadingPage;