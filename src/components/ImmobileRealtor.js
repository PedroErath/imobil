import React from "react";
import { View, Text, Image } from "react-native";

function ImmobileRealtor() {
    return (
        <View style={{
            paddingHorizontal: 23,
            marginBottom: 75
        }}>
            <Text style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 16,
                color: 'black',
                marginBottom: 16
            }}>Corretor Responsável</Text>

            <View style={{
                flexDirection:'row',
                alignItems: "center"
            }}>
                <Image source={require('../images/image-realtor-perfil.jpg')}  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    marginRight: 16
                }}/>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black'
                }}>Pedro Vinícius Erath</Text>
            </View>
        </View>
    )
}

export default ImmobileRealtor;