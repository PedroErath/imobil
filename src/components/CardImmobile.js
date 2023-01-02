import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import InfosIconsImmobile from "./InfosIconsImmobile";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import storage from '@react-native-firebase/storage'

function CardImmobile(props) {

    const [imageBanner, setImageBanner] = useState()

    useEffect(() => {
        GetImageBanner()
    },[])

    async function GetImageBanner() {
        const url = await storage().ref(`immobiles/${props.id}/${props.id}-0.jpg`).getDownloadURL()
        setImageBanner(url)
    }

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Imovel', { ...props })} style={{
            marginHorizontal: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: 'white',
            width: 267,
            height: 315,
            borderRadius: 5,
            elevation: 15,
            borderColor: '#000'
        }}>
            <View>
                <Image source={{uri:imageBanner}} resizeMode='stretch' style={{
                    width: 267,
                    height: 160,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5
                }} />
                <View style={{
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    width: 267,
                    flex: 1,
                    justifyContent: "space-between"
                }}>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        color: 'black',
                        fontSize: 16,
                        marginBottom: 8
                    }}>
                        {props.immobile.title}
                    </Text>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 8,

                    }}>
                        <MaterialCommunityIcons name="map-marker" size={24} color='#197B5C' />
                        <Text style={{
                            marginLeft: 8,
                            fontFamily: 'Montserrat-Regular',
                            color: '#737373',
                        }}>
                            {`${props.immobile.address}, ${props.immobile.district} - ${props.immobile.city}`}
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
                            R${props.immobile.price}
                        </Text>
                        <Text style={{
                            fontFamily: 'Montserrat-Bold',
                            color: 'red'
                        }}>
                            {props.immobile.negotiationtype}
                        </Text>
                    </View>

                    <InfosIconsImmobile
                        bedQuantity={props.immobile.bedrooms}
                        size={props.immobile.size}
                        bethQuantity={props.immobile.restrooms}
                        garageQuantity={props.immobile.garages}
                        iconSize={20}
                        fontSize={14}
                    />

                </View>
            </View>
        </TouchableOpacity>
    )
};


export default CardImmobile;