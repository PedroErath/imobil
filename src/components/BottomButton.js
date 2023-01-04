import React ,{useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import firestore from '@react-native-firebase/firestore'

function BottomButton(props) {

    const [realtor, setRealtor] = useState()

    useEffect(() => {
        firestore().collection('users').doc(props.realtor).get()
            .then(doc => {
                setRealtor(doc.data())
            })
            .catch(erro => {
                console.log(`Erro get Realtor for senda whatsapp message: ${erro}`)
            })
    }, [])

    function sendMessageToWhatsapp() {
        const msg = `Olá, gostaria de agendar uma visita a um imóvel%0A%0AImóvel: ${props.title}%0A%0Alocalização: ${props.address}, ${props.district} - ${props.city}%0A%0ACorretor Responsável: ${realtor.name}`
    
        Linking.openURL(`whatsapp://send?text=${msg}&phone=+5551998593383`)
            .then(result => {
                
            })
            .catch(erro => {
                console.log(`Erro send message to whatsApp in immobile: ${erro}`)
            })
    }

    return (
        <View style={{
            position: "absolute",
            bottom: 0,
            width: '100%',
            height: 65,
            backgroundColor: '#fff'
        }}>
            <View style={{
                paddingHorizontal: 23,
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: "center",
                height: '100%'
            }}>
                <Text style={{
                    fontFamily: 'Montserrat-Bold',
                    color: '#000',
                    fontSize: 16
                }}>{props.price} | <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 16,
                    color: '#f00'
                }}>{props.negotiationtype}</Text></Text>
                <TouchableOpacity onPress={() => sendMessageToWhatsapp()}
                style={{
                    backgroundColor: '#197B5C',
                    padding: 12,
                    borderRadius: 10,
                    elevation: 15,
                    shadowColor: '#000'
                }}>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 16,
                        color: '#fff'
                    }}>Agendar Visita</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomButton;