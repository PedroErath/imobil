import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Linking } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function Contact() {
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
                    }}>WhatsApp</Text> preencha o formulário abaixo, logo você receberá uma mensagem de nossa equipe.</Text>
                    <TextInput placeholder="Nome" placeholderTextColor='#000' style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        borderRadius: 10,
                        paddingHorizontal: 15,
                        marginBottom: 8
                    }} />
                    <TextInput placeholder="Email" placeholderTextColor='#000' style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        borderRadius: 10,
                        paddingHorizontal: 15,
                        marginBottom: 8
                    }} />
                    <TextInput placeholder="Telefone" placeholderTextColor='#000' style={{
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