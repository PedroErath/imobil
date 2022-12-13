import React from "react";
import { View, Text, ImageBackground } from "react-native";
import backgroundImage from '../images/loading-page-image.jpg';

function LoadingPage() {
  return (
    <View style={{
      flex: 1
    }}>
      <ImageBackground source={backgroundImage} resizeMode='cover' blurRadius={4} style={{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{
          fontSize: 64,
          color: '#197B5C',
          fontFamily: "Montserrat-Bold"
        }}>IMOBIL</Text>
      </ImageBackground>
    </View>
  )
}

export default LoadingPage;