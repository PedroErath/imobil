import React from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

function Realtor(props) {
    return (
        <View style={{
            flex: 1,
        }}>
            <ImageBackground source={require('../images/loading-page-image.jpg')} resizeMode='cover' blurRadius={4} style={{
                flex: 1,
                width: '100%',
                height: '100%',
                justifyContent: "center",
                alignItems: "center"
            }}>

                <Text style={{
                    fontSize: 64,
                    color: '#197B5C',
                    fontFamily: "Montserrat-Bold",
                }}>IMOBIL</Text>
                <Text style={{
                    fontFamily: 'Montserrat-Bold',
                    fontSize: 35,
                    color: '#fff',
                    marginBottom: 16
                }}>Login</Text>
                <View style={{
                    width: '100%',
                    paddingHorizontal: 23
                }}>
                    <TextInput placeholder="Usuário" placeholderTextColor='#000' style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        borderRadius: 10,
                        paddingHorizontal: 15,
                        marginBottom: 8
                    }} />
                    <TextInput placeholder="Senha" placeholderTextColor='#000' style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        borderRadius: 10,
                        paddingHorizontal: 15,
                        marginBottom: 8
                    }} />

                    <TouchableOpacity style={{
                        width: '100%',
                        backgroundColor: '#197B5C',
                        padding: 15,
                        borderRadius: 10,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 20,
                            color: '#fff'
                        }}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Realtor;