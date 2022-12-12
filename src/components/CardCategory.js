import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

function CardCategory(props) {
    return (
        <TouchableOpacity style={[style.button, props.style]}>
            <Image source={props.icon} />
            <Text style={style.title}>{props.name}</Text>
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    button: {
        height: 45,
        flexDirection: "row",
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 12,
        elevation: 15,
        marginLeft: 16,
        shadowColor: 'black'
    },
    title: {
        fontFamily: 'Montserrat-Regular',
        color: 'black',
        marginLeft: 10,
    }
});

export default CardCategory;