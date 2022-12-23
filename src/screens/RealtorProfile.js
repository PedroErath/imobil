import React from 'react';
import { View, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoutButton from '../components/LogoutButton';

function RealtorProfile(props) {

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
                <TouchableOpacity>
                    <Image style={{
                        width: 200,
                        height: 200,
                        borderRadius: 300
                    }} resizeMode='cover' source={require('../images/image-realtor-perfil.jpg')} />
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
                    }}>Pedro Erath</Text>
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
                    <Text style={{
                        fontFamily: 'Montserrat-Regular',
                        color: '#fff',
                        fontSize: 20,
                        marginRight: 10
                    }}>pverath@gmail.com</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name='pen' size={34} color='#fff' />
                    </TouchableOpacity>
                </View>
                <LogoutButton {...props} />
            </ImageBackground>
        </View>
    )
}

export default RealtorProfile;