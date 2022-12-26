import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, Image, ImageBackground, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoutButton from '../components/LogoutButton';

function RealtorProfile(props) {

    const [profileImage, setProfileImage] = useState({})
    const [responseMessage, setResponseMessage] = useState({})
    const userLogged = auth().currentUser
    const [inputUserName, setInputUserName] = useState({ editable: false, name: userLogged.displayName })

    useEffect(() => {
        GetImageFromProfile()
        profileImage.fileName ? UploadImageToStorage() : null
    }, [profileImage])

    async function GetImageFromProfile(){
        const url = await storage().ref(userLogged.photoURL).getDownloadURL()
        setProfileImage({uri: url})
    }

    function handleProfileImage() {
        Alert.alert(
            "Selecione",
            "Selecione onde está sua foto",
            [
                {
                    text: 'Galeria',
                    onPress: () => pickImageFromGalery(),
                    style: 'default'
                },
                {
                    text: 'Câmera',
                    onPress: () => pickImageFromCamera(),
                    style: 'default'
                }
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('Alert cancelable')
            }
        )
    }

    async function pickImageFromGalery() {

        const options = {
            mediaType: 'photo'
        }

        const result = await launchImageLibrary(options)

        if (result.assets) {
            setProfileImage(result.assets[0])
        } else {
            console.log('Erro: pickImageFromGaleria')
        }
    }

    async function pickImageFromCamera() {
        const options = {
            mediaType: 'photo',
            saveToPhotos: false,
            quality: 1
        }

        const result = await launchCamera(options);

        if (result.assets) {
            setProfileImage(result.assets[0])
        } else {
            console.log('Erro: pickImageFromCamera')
        }
    }

    function UploadImageToStorage() {
        const ext = profileImage.fileName.split('.').pop()
        const reference = storage().ref(`realtors/${userLogged.uid}.${ext}`)

        reference.putFile(profileImage.uri).then(result => {
            userLogged.updateProfile({
                photoURL: reference.fullPath
            })
            setResponseMessage({
                success: true,
                msg: 'Foto de perfil atualizada'
            })
            setTimeout(() => {
                setResponseMessage({})
            }, 3000)
        })
            .catch(error => {
                console.log(error)
            })
    }

    function HandleInputUserName() {
        setInputUserName({ ...inputUserName, editable: !inputUserName.editable })
    }

    function EditarDisplauNameCurrentUser() {
        userLogged.updateProfile({
            displayName: inputUserName.name
        }).then(() => {
            firestore().collection('users').doc(userLogged.uid).set({
                name: inputUserName.name,
            })
                .then(() => {
                    setInputUserName({ ...inputUserName, editable: !inputUserName.editable })
                    setResponseMessage({
                        success: true,
                        msg: 'Nome de perfil atualizado'
                    })
                    setTimeout(() => {
                        setResponseMessage({})
                    }, 3000)
                })
        })
            .catch(erro => {
                console.log(erro)
            })
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ImageBackground source={require('../images/loading-page-image.jpg')} resizeMode='cover' blurRadius={4} style={{
                flex: 1,
                width: '100%',
                height: '100%',
                justifyContent: "center",
                alignItems: "center"
            }}>
                <TouchableOpacity onPress={() => handleProfileImage()}>
                    <Image style={{
                        width: 200,
                        height: 200,
                        borderRadius: 300
                    }} resizeMode='cover' source={{ uri: profileImage.uri || 'https://via.placeholder.com/150' }} />
                </TouchableOpacity>
                <View style={{
                    width: '100%',
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10
                }}>
                    <TextInput onChangeText={e => setInputUserName({ ...inputUserName, name: e })}
                        editable={inputUserName.editable}
                        style={{
                            fontFamily: 'Montserrat-Bold',
                            color: '#fff',
                            fontSize: 30,
                            marginRight: 10,
                            borderRadius: 10,
                            backgroundColor: inputUserName.editable ? '#737373' : null
                        }}>{userLogged.displayName}</TextInput>
                    <TouchableOpacity onPress={e => { HandleInputUserName() }}>
                        <MaterialCommunityIcons name='pen' size={34} color='#fff' />
                    </TouchableOpacity>
                </View>

                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: '#fff',
                    fontSize: 20,
                    marginRight: 10
                }}>{userLogged.email}</Text>

                <TouchableOpacity
                    onPress={() => EditarDisplauNameCurrentUser()}
                    style={{
                        display: userLogged.displayName == inputUserName.name ? 'none' : null,
                        marginTop: 16,
                        backgroundColor: '#197B5C',
                        padding: 15,
                        borderRadius: 10
                    }}>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        color: '#fff'
                    }}>Editar</Text>
                </TouchableOpacity>

                <Text style={{
                    marginTop: 10,
                    fontFamily: 'Montserrat-Regular',
                    color: '#197B5C'
                }}>{responseMessage.msg}</Text>

                <LogoutButton {...props} />
            </ImageBackground>
        </View>
    )
}

export default RealtorProfile;