import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, TextInput } from "react-native";

function ImmobileRegister() {

    const [immobile, setImmobile] = useState({})

    return (
        <View style={{
            flex: 1
        }}>
            <ImageBackground source={require('../images/image-background-contact.png')} resizeMode='cover' blurRadius={4} style={{
                flex: 1,
                width: '100%',
                height: '100%',
                justifyContent: "center",
                alignItems: "center",
            }}>
                <View style={{
                    width: '100%',
                    paddingHorizontal: 23
                }}>
                    <Text style={{
                        fontSize: 50,
                        color: '#197B5C',
                        fontFamily: "Montserrat-Bold",
                        textAlign: "center"
                    }}>Registrar Imóvel</Text>

                    <TextInput placeholder="Titulo"
                        placeholderTextColor='#000'
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            marginBottom: 8
                        }}
                    />
                    <TextInput placeholder="Localização"
                        placeholderTextColor='#000'
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            marginBottom: 8
                        }}
                    />
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}>
                        <TextInput placeholder="Tipo do imóvel"
                            placeholderTextColor='#000'
                            style={{
                                flex: 1,
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 15,
                                marginBottom: 8,
                                marginRight: 5
                            }}
                        />
                        <TextInput placeholder="Nota"
                            placeholderTextColor='#000'
                            style={{
                                flex: 1,
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 15,
                                marginBottom: 8
                            }}
                        />
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}>
                        <TextInput placeholder="Quartos"
                            keyboardType="number-pad"
                            placeholderTextColor='#000'
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 12,
                                marginBottom: 8
                            }}
                        />
                        <TextInput placeholder="Banheiros"
                            keyboardType="number-pad"
                            placeholderTextColor='#000'
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 12,
                                marginBottom: 8
                            }}
                        />
                        <TextInput placeholder="Garagens"
                            keyboardType="number-pad"
                            placeholderTextColor='#000'
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 12,
                                marginBottom: 8
                            }}
                        />
                        <TextInput placeholder="Tamanho"
                            keyboardType="number-pad"
                            placeholderTextColor='#000'
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 12,
                                marginBottom: 8
                            }}
                        />
                    </View>
                    <TextInput placeholder="Tipo de negocioação"
                        placeholderTextColor='#000'
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            marginBottom: 8
                        }}
                    />
                    <TextInput placeholder="Comodidades"
                        placeholderTextColor='#000'
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            marginBottom: 8
                        }}
                    />
                    <TextInput placeholder="Fotos"
                        placeholderTextColor='#000'
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            marginBottom: 8
                        }}
                    />

                    <TouchableOpacity style={{
                        width: '100%',
                        backgroundColor: '#197B5C',
                        padding: 15,
                        borderRadius: 10,
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                        <Text style={{
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 20,
                            color: '#fff'
                        }}>Enviar</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}

export default ImmobileRegister;