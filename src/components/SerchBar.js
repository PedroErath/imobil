import React from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function SearchBar() {
    return (
        <View style={{
            backgroundColor: 'white',
            marginHorizontal: 23,
            marginTop: -25,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            elevation: 15,
            shadowColor: 'black',
        }}>
            <MaterialCommunityIcons name="magnify" size={25} color='#fff' />
            <TextInput style={{
                flex: 1
            }} placeholder='O que você procura' placeholderTextColor={'#737373'} />
            <TouchableOpacity style={{
                backgroundColor: '#197B5C',
                padding: 5,
                borderRadius: 5
            }}>
                <MaterialCommunityIcons name="tune-vertical-variant" size={25} color='#fff' />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar;