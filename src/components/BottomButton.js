import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function BottomButton() {
    return (
        <View style={{
            position: "absolute",
            bottom: 0,
            width: '100%',
            height: 65,
            backgroundColor: '#fff'
        }}>
            <View style={{
                paddingHorizontal: 23,
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: "center",
                height: '100%'
            }}>
                <Text style={{
                    fontFamily: 'Montserrat-Bold',
                    color: '#000',
                    fontSize: 16
                }}>R$100.000 |<Text style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 16,
                    color: '#f00'
                }}> Venda </Text></Text>
                <TouchableOpacity style={{
                    backgroundColor: '#197B5C',
                    padding: 12,
                    borderRadius: 10,
                    elevation: 15,
                    shadowColor: '#000'
                }}>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 16,
                        color: '#fff'
                    }}>Agendar Visita</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomButton;