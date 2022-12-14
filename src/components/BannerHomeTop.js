import React from "react";
import { View, Text, ImageBackground } from 'react-native';
import backgroundImage from '../images/home-background-top-image.jpg';

function BannerHomeTop() {
    return (
        <View style={{
            height: 160
        }}>
            <ImageBackground source={backgroundImage} blurRadius={2} style={{
                width: '100%',
                height: '100%',
                justifyContent: "center",
            }}>
                <Text style={{
                    fontFamily: "Montserrat-Regular",
                    marginHorizontal: 35,
                    color: 'white',
                    fontSize: 24,
                }}>Ajudando você nesta <Text style={{
                    fontSize: 26,
                    fontFamily: "Montserrat-Bold",
                    color: '#197B5C'
                }}>Conquista</Text>.</Text>
            </ImageBackground>
        </View>
    )
}

export default BannerHomeTop;