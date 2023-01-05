import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Linking } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaskInput, { Masks } from "react-native-mask-input";

function Contact() {

    const [inputValeus, setInputValues] = useState({})
    const [responseMessage, setResponseMessage] = useState({})

    function sendMessageToWhatsapp() {
        if (
            inputValeus.name &&
            inputValeus.email &&
            inputValeus.phone
        ) {
            Linking.openURL('whatsapp://send?text=Olá&phone=+5551998593383')
                .then(result => {
                    console.log(`Open whatsapp from contact: ${result}`)
                })
                .catch(erro => {
                    setResponseMessage({
                        success: false,
                        txt: 'Algo deu errado, tente novamente mais tarde.'
                    })
                    console.log(`Erro send message to whatsApp in immobile: ${erro}`)
                })
        } else {
            setResponseMessage({
                success: false,
                txt: 'Preencha todos os campos'
            })
        }
    }

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
                        fontFamily: "Montserrat-Bold"
                    }}>Contate-nos</Text>
                    <Text style={{
                        fontFamily: 'Montserrat-Regular',
                        textAlign: 'justify',
                        color: '#737373',
                        marginBottom: 16
                    }}>Para entrar em contato pelo <Text style={{
                        color: '#197B5C',
                        fontFamily: 'Montserrat-Bold',
                    }}>WhatsApp</Text> preencha o formulário abaixo, logo nossa equipe retornará sua mensagem.</Text>
                    <TextInput onChangeText={e => setInputValues({ ...inputValeus, name: e })}
                        placeholder="Nome"
                        placeholderTextColor='#000'
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            marginBottom: 8
                        }} />
                    <TextInput onChangeText={e => setInputValues({ ...inputValeus, email: e })}
                        placeholder="Email"
                        placeholderTextColor='#000'
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            marginBottom: 8
                        }} />
                    <MaskInput onChangeText={(masked, unmasked) => setInputValues({ ...inputValeus, phoneMasked: masked, phoneUnmasked: unmasked })}
                        value={inputValeus.phoneMasked}
                        placeholder="Telefone"
                        keyboardType="phone-pad"
                        placeholderTextColor='#000'
                        mask={Masks.BRL_PHONE}
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            marginBottom: 8
                        }} />

                    <Text style={{
                        color: responseMessage.success ? '#197B5C' : 'red',
                        textAlign: 'center',
                        marginBottom: 5
                    }}>{responseMessage.txt}</Text>

                    <TouchableOpacity onPress={() => sendMessageToWhatsapp()}
                        style={{
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

                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        textAlign: 'center',
                        marginBottom: 8
                    }}>Redes Sociais</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
                            <MaterialCommunityIcons name="facebook" size={60} color='#197B5C' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
                            <MaterialCommunityIcons name="instagram" size={60} color='#197B5C' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')}>
                            <MaterialCommunityIcons name="linkedin" size={60} color='#197B5C' />
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Contact;