import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import CheckBox from "@react-native-community/checkbox";

function UserRegister(props) {

    const [user, setUser] = useState({})
    const [responseMessage, setResponseMessage] = useState({})
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    function Register() {
        if (user.email && user.password && user.name)
            auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    firestore().collection('users').doc(userCredential.user.uid).set({
                        name: user.name,
                        email: user.email,
                        admin: toggleCheckBox
                    })
                    .then(() => {
                        props.navigation.navigate('Usuarios')
                        setUser({})
                        setResponseMessage({})
                    })
                })
                .catch(error => {
                    setResponseMessage({
                        success: false,
                        msg: 'Email e/ou senha inválidos'
                    })
                })
        else {
            setResponseMessage({
                success: false,
                msg: 'Informe email, senha e nome'
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
                }}>Registrar Usuário</Text>
                <View style={{
                    width: '100%',
                    paddingHorizontal: 23
                }}>
                    <TextInput value={user.email}
                        onChangeText={e => setUser({ ...user, name: e })}
                        placeholder="Nome"
                        placeholderTextColor='#000'
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            marginBottom: 8
                        }}
                    />
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
                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center"
                    }}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={{
                            fontFamily: 'Montserrat-Regular',
                            color: '#000'
                        }}>Admin ?</Text>
                    </View>
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
                        <Text onPress={Register}
                            style={{
                                fontFamily: 'Montserrat-Bold',
                                fontSize: 20,
                                color: '#fff'
                            }}>Registrar</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}

export default UserRegister;