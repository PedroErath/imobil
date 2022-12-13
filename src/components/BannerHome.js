import React from "react";
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import backgroundImage from '../images/home-background-top-image.jpg';

function BannerHome() {
    return (
        <View style={style.bannerContainer}>
            <ImageBackground source={backgroundImage} blurRadius={2} style={style.backgroundImage}>
                <Text style={style.titleBanner}>Ajudando você nesta <Text style={style.emphasisTitleBanner}>Conquista</Text>.</Text>
            </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    bannerContainer: {
        height: 160
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
    },
    titleBanner: {
        fontFamily: "Montserrat-Regular",
        marginHorizontal: 35,
        color: 'white',
        fontSize: 24,
    },
    emphasisTitleBanner: {
        fontSize: 26,
        fontFamily: "Montserrat-Bold",
        color: '#197B5C'
    },
})

export default BannerHome;