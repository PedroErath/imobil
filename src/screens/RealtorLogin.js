import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

function RealtorLogin(props) {

    const [user, setUser] = useState({})
    const [responseMessage, setResponseMessage] = useState({})
    const [passwordReset, setPasswordReset] = useState(false)

    function Login() {
        if (user.email && user.password)
            auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .then(async (user) => {
                    const userInfo = await firestore().collection('users').doc(user.user.uid).get()
                    userInfo.data().admin ? props.navigation.navigate('Registrar Usuario')
                        : props.navigation.navigate('Meus Imoveis')
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

    function SendPasswordResetEmail() {
        if(user.email){
            auth().sendPasswordResetEmail(user.email)
            .then(() => {
                setResponseMessage({
                    success: true,
                    msg: 'Enviamos um email para recuperar sua senha'
                })
                setTimeout(() => {
                    setPasswordReset(false)
                    setResponseMessage({})
                }, 3000)
            })
            .catch((erro) => {
                console.log(`Erro Recuperação de senha: ${erro}`)
                setResponseMessage({
                    success: false,
                    msg: 'Algo deu errado, tente novamente mais tarde'
                })
            })
        }else{
            setResponseMessage({
                success: false,
                msg: 'Informe seu email'
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
                }}>{!passwordReset ? 'Login' : 'Recuperar Senha'}</Text>
                <View style={{
                    width: '100%',
                    paddingHorizontal: 23
                }}>
                    <TextInput value={user.email}
                        onChangeText={e => setUser({ ...user, email: e })}
                        placeholder="Email"
                        placeholderTextColor='#000'
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            marginBottom: 8
                        }}
                    />
                    {!passwordReset ?
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
                            }}
                        />
                        : null}


                    <Text style={{
                        color: responseMessage.success ? '#197B5C' : 'red',
                        textAlign: 'center',
                        marginBottom: 5
                    }}>{responseMessage.msg}</Text>
                    <TouchableOpacity onPress={!passwordReset ? Login : SendPasswordResetEmail}
                        style={{
                            width: '100%',
                            backgroundColor: '#197B5C',
                            padding: 15,
                            borderRadius: 10,
                            alignItems: 'center',
                            elevation: 15,
                            shadowColor: '#000'
                        }}>
                        <Text style={{
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 20,
                            color: '#fff'
                        }}>{!passwordReset ? 'Entrar' : 'Enviar email'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setPasswordReset(!passwordReset)
                    }}
                        style={{
                            marginTop: 10,
                        }}>
                        <Text style={{
                            fontFamily: 'Montserrat-Regular',
                            color: '#000',
                            textAlign: 'center'
                        }}>{!passwordReset ? 'Esqueci minha senha' : 'Fazer login'}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default RealtorLogin;