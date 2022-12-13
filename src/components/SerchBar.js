import React from "react";
import { View, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import searchIcon from '../images/magnifying-glass-icon.png';
import buttonSearchIcon from '../images/equalizer-icon.png';

function SearchBar() {
    return (
        <View style={style.searchBar}>
            <Image source={searchIcon} />
            <TextInput style={style.textInput} placeholder='O que você procura' placeholderTextColor={'#737373'} />
            <TouchableOpacity style={style.button}>
                <Image source={buttonSearchIcon} />
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    searchBar: {
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
    },
    textInput: {
        flex: 1
    },
    button: {
        backgroundColor: '#197B5C',
        padding: 5,
        borderRadius: 5
    }
})

export default SearchBar;