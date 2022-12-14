import React from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function InfosImmobileIcons(props) {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: 'space-between'
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <MaterialCommunityIcons name="bed-king" size={props.iconSize} color='#197B5C' style={{
                    marginRight: 5
                }} />
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    fontSize: props.fontSize
                }}>
                    {props.bedQuantity}
                </Text>
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <MaterialCommunityIcons name="arrow-expand" size={props.iconSize} color='#197B5C' style={{
                    marginRight: 5
                }} />
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    fontSize: props.fontSize
                }}>
                    {props.size}m&#178;
                </Text>
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <MaterialCommunityIcons name="shower" size={props.iconSize} color='#197B5C' style={{
                    marginRight: 5
                }} />
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    fontSize: props.fontSize
                }}>
                    {props.bethQuantity}
                </Text>
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <MaterialCommunityIcons name="garage-open" size={props.iconSize} color='#197B5C' style={{
                    marginRight: 5
                }} />
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    fontSize: props.fontSize
                }}>
                    {props.garageQuantity}
                </Text>
            </View>
        </View>
    )
}

export default InfosImmobileIcons;