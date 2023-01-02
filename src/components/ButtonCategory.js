import React from "react";
import { TouchableOpacity, Image, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function ButtonCategory({ SetStateTypeImmobileFilter, icon, name, bgColor }) {

    return (
        <TouchableOpacity onPress={() => {
            SetStateTypeImmobileFilter(name, )
        }}
            style={{
                height: 45,
                flexDirection: "row",
                backgroundColor: bgColor,
                borderRadius: 50,
                padding: 12,
                elevation: 15,
                marginLeft: 8,
                shadowColor: 'black'
            }}>
            <MaterialCommunityIcons name={icon} size={20} color='#197B5C' />
            <Text style={{
                fontFamily: 'Montserrat-Regular',
                color: 'black',
                marginLeft: 6,
            }}>{name}</Text>
        </TouchableOpacity>
    )
};

export default ButtonCategory;