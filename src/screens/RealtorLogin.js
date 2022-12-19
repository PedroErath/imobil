import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';

function RealtorLogin(props) {

    const [user, setUser] = useState({})
    const [responseMessage, setResponseMessage] = useState({})

    function Login() {
        if (user.email && user.password)
            auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .then((user) => {
                    props.navigation.navigate('Meus Imoveis')
                    setUser({})
                    setResponseMessage({})
                })
                .catch(error => {
                    setResponseMessage({
                        success: false,
                        msg: 'Email e/ou senha incorretos'
                    })
                })
        else {
            setResponseMessage({
                success: false,
                msg: 'Informe email e senha'
            })
        }
    }


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
                    <TextInput value={user.email}
                        onChangeText={e => setUser({ ...user, email: e })}
                        placeholder="Usuário"
                        placeholderTextColor='#000'
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            marginBottom: 8
                        }} />
                    <TextInput value={user.password}
                        onChangeText={e => setUser({ ...user, password: e })}
                        placeholder="Senha"
                        placeholderTextColor='#000'
                        secureTextEntry={true}
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
                    }}>{responseMessage.msg}</Text>
                    <TouchableOpacity style={{
                        width: '100%',
                        backgroundColor: '#197B5C',
                        padding: 15,
                        borderRadius: 10,
                        alignItems: 'center',
                        elevation: 15,
                        shadowColor: '#000'
                    }}>
                        <Text onPress={Login}
                            style={{
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

export default RealtorLogin;