import React from "react";
import { View, Text, Image } from "react-native";

function ImmobileLocation() {
    return (
        <View style={{
            paddingHorizontal: 23,
            marginBottom: 23
        }}>
            <Text style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 16,
                color: 'black',
                marginBottom: 16
            }}>Localização</Text>

            <Image source={require('../images/map.jpg')} resizeMode='stretch' style={{
                width: '100%',
                height: 200,
                borderRadius: 5
            }} />
        </View>
    )
}

export default ImmobileLocation;