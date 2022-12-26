import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, Image, ImageBackground, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoutButton from '../components/LogoutButton';

function RealtorProfile(props) {

    const [profileImage, setProfileImage] = useState({})
    const [responseMessage, setResponseMessage] = useState({})
    const userLogged = auth().currentUser

    useEffect(() => {
        profileImage.fileName ? UploadImageToStorage() : null
    }, [profileImage])

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
        const reference = storage().ref(`realtors/${userLogged.displayName}-${profileImage.fileName}`)

        reference.putFile(profileImage.uri).then(result => {
            setResponseMessage({
                success: true,
                msg:'Foto de perfil atualizada'
            })
            setTimeout(() => {
                setResponseMessage({})
            }, 3000)
        })
            .catch(error => {
                console.log(error)
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
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        color: '#fff',
                        fontSize: 30,
                        marginRight: 10
                    }}>{userLogged.displayName}</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name='pen' size={34} color='#fff' />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '100%',
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10
                }}>
                    <TextInput editable={false} style={{
                        fontFamily: 'Montserrat-Regular',
                        color: '#fff',
                        fontSize: 20,
                        marginRight: 10
                    }}>{userLogged.email}</TextInput>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name='pen' size={34} color='#fff' />
                    </TouchableOpacity>
                </View>

                <Text style={{
                    fontFamily:'Montserrat-Regular',
                    color: '#197B5C'
                }}>{responseMessage.msg}</Text>

                <LogoutButton {...props} />
            </ImageBackground>
        </View>
    )
}

export default RealtorProfile;