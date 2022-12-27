import React, {useEffect, useState} from "react";
import { View, Text, Image } from "react-native";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

function ImmobileRealtor(props) {
    
    const [realtor, setRealtor] = useState({})
    const [imageRealtor, setImageRealtor] = useState('')

    useEffect(() => {
        GetRealtorPerfilAndImage()
        firestore().collection('users').doc(props.realtor).get()
    }, [])

    async function GetRealtorPerfilAndImage () {
        const realtorPerfil = await firestore().collection('users').doc(props.realtor).get()
        const realtorImageURL = await storage().ref(realtorPerfil.data().photoURL).getDownloadURL()
        setRealtor(realtorPerfil.data())
        setImageRealtor(realtorImageURL)
    }

    return (
        <View style={{
            paddingHorizontal: 23,
            marginBottom: 75
        }}>
            <Text style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 16,
                color: 'black',
                marginBottom: 16
            }}>Corretor Responsável</Text>

            <View style={{
                flexDirection:'row',
                alignItems: "center"
            }}>
                <Image source={{ uri: imageRealtor || 'https://via.placeholder.com/150' }}  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    marginRight: 16
                }}/>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black'
                }}>{realtor.name}</Text>
            </View>
        </View>
    )
}

export default ImmobileRealtor;