import React from "react";
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ImmobileAmenities(props) {

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
            }}>Comodidades</Text>

            <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: 'space-between'
            }}>
                {props.amenities.map((amenitie, index) => {
                    return (
                        <Text key={index}
                            style={{
                                fontFamily: 'Montserrat-Regular',
                                color: 'black',
                                width: '45%',
                                marginBottom: 8
                            }}><MaterialCommunityIcons name="circle" color={'#197B5C'} /> {amenitie}</Text>
                    )
                })}

            </View>
        </View>
    )
}

export default ImmobileAmenities;