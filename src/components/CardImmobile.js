import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import InfosIconsImmobile from "./InfosIconsImmobile";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CardImmobile(props) {
    return (
        <TouchableOpacity style={{
            marginHorizontal: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: 'white',
            width: 267,
            height: 300,
            borderRadius: 5,
            elevation: 15,
            borderColor: '#000'
        }}>
            <View>
                <Image source={require('../images/house-primary.jpg')} resizeMode='stretch' style={{
                    width: 267,
                    height: 160,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5
                }} />
                <View style={{
                    paddingHorizontal: 16,
                    paddingVertical: 8
                }}>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        color: 'black',
                        fontSize: 16,
                        marginBottom: 8
                    }}>
                        {props.title}
                    </Text>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 8
                    }}>
                        <MaterialCommunityIcons name="map-marker" size={24} color='#197B5C'/>
                        <Text style={{
                            marginLeft: 8,
                            fontFamily: 'Montserrat-Regular',
                            color: '#737373'
                        }}>
                            {props.location}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        marginBottom: 8
                    }}>
                        <Text style={{
                            fontFamily: 'Montserrat-Bold',
                            color: 'black'
                        }}>
                            R${props.value}
                        </Text>
                        <Text style={{
                            fontFamily: 'Montserrat-Bold',
                            color: 'red'
                        }}>
                            {props.type}
                        </Text>
                    </View>

                    <InfosIconsImmobile 
                        bedQuantity={props.bedQuantity}
                        size={props.size}
                        bethQuantity={props.bethQuantity}
                        garageQuantity={props.garageQuantity}
                        iconSize={20}
                        fontSize={14}
                    />

                </View>
            </View>
        </TouchableOpacity>
    )
};


export default CardImmobile;