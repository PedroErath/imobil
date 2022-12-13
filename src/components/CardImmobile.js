import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
                <Image source={props.imageBanner} style={{
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
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <MaterialCommunityIcons name="bed-king" size={20} color='#197B5C' style={{
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
                            <MaterialCommunityIcons name="arrow-expand" size={20} color='#197B5C' style={{
                                    marginRight: 5
                                }} />
                            <Text style={{
                                fontFamily: 'Montserrat-Regular',
                                color: 'black'
                            }}>
                                {props.size}m&#178;
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <MaterialCommunityIcons name="shower" size={20} color='#197B5C' style={{
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
                            <MaterialCommunityIcons name="garage-open" size={20} color='#197B5C' style={{
                                marginRight: 5
                            }} />
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