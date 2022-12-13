import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import locationIcon from '../images/location-icon.png';
import bedIcon from '../images/bed-icon.png';
import sizeIcon from '../images/size-icon.png';
import bethIcon from '../images/beth-icon.png';
import garageIcon from '../images/garage-icon.png';

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
                <Image source={props.imageBanner} />
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
                        <Image resizeMode="cover" source={locationIcon} />
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
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <Image source={bedIcon} style={{
                                marginRight: 5
                            }} />
                            <Text style={{
                                fontFamily: 'Montserrat-Regular',
                                color: 'black'
                            }}>
                                {props.bedQuantity}
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <Image source={sizeIcon} style={{
                                marginRight: 5
                            }} />
                            <Text style={{
                                fontFamily: 'Montserrat-Regular',
                                color: 'black'
                            }}>
                                {props.size}
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <Image source={bethIcon} style={{
                                marginRight: 5
                            }} />
                            <Text style={{
                                fontFamily: 'Montserrat-Regular',
                                color: 'black'
                            }}>
                                {props.bethQuantity}
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <Image source={garageIcon} style={{ marginRight: 5 }} />
                            <Text style={{
                                fontFamily: 'Montserrat-Regular',
                                color: 'black'
                            }}>
                                {props.garageQuantity}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};


export default CardImmobile;