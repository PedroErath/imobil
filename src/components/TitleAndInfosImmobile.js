import React from "react";
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InfosIconsImmobile from "./InfosIconsImmobile";

function TitleAndInfosImmobile(props) {
    return (
        <View>
            <View style={{
                paddingHorizontal: 23,
                paddingBottom: 16,
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: "center"
            }}>
                <View style={{
                    flex: 7
                }}>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        color: '#000',
                        fontSize: 20,
                        marginBottom: 5
                    }}>{props.title}</Text>
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <Text style={{
                            fontFamily: 'Montserrat-Regular',
                            color: '#737373'
                        }}>{props.immobiletype}</Text>
                        <MaterialCommunityIcons name="circle-small" size={20} color='#737373' />
                        <MaterialCommunityIcons name="star" size={18} color='#EFBA00' />
                        <Text style={{
                            fontFamily: 'Montserrat-Bold',
                            color: '#000'
                        }}>{props.ranking}</Text>
                    </View>
                </View>
                <View style={{
                    flex:5,
                    backgroundColor: '#197B5C',
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                    elevation: 15,
                    shadowColor: '#000'
                }}>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 20,
                        color: '#fff'
                    }}>{props.price}</Text>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 16,
                        color: 'red'
                    }}>{props.negotiationtype}</Text>
                </View>
            </View>
            <View style={{
                paddingHorizontal: 23,
                marginBottom: 32
            }}>
                <InfosIconsImmobile
                    bedQuantity={props.bedrooms}
                    size={props.size}
                    bethQuantity={props.restrooms}
                    garageQuantity={props.garages}
                    iconSize={26}
                    fontSize={16}
                />
            </View>
        </View>
    )
}

export default TitleAndInfosImmobile;