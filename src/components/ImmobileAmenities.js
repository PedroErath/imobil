import React from "react";
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ImmobileAmenities(){
    return(
        <View style={{
            paddingHorizontal:23,
            marginBottom: 23
        }}>
            <Text style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 16,
                color: 'black',
                marginBottom: 16
            }}>Comodidades</Text>

            <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    width: '45%',
                    marginBottom: 8,
                }}><MaterialCommunityIcons name="circle" color={'#197B5C'} /> Ar condicionado</Text>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    width: '45%',
                    marginBottom: 8,
                }}><MaterialCommunityIcons name="circle" color={'#197B5C'} /> Churrasqueira</Text>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    width: '45%',
                    marginBottom: 8,
                }}><MaterialCommunityIcons name="circle" color={'#197B5C'} /> Área de serviço</Text>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    width: '45%',
                    marginBottom: 8,
                }}><MaterialCommunityIcons name="circle" color={'#197B5C'} /> Banheiro Social</Text>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    width: '45%',
                    marginBottom: 8,
                }}><MaterialCommunityIcons name="circle" color={'#197B5C'} /> Cozinha Americana</Text>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    width: '45%',
                    marginBottom: 8,
                }}><MaterialCommunityIcons name="circle" color={'#197B5C'} /> Sacada</Text>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    width: '45%',
                    marginBottom: 8,
                }}><MaterialCommunityIcons name="circle" color={'#197B5C'} /> Sala de jantar</Text>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    width: '45%',
                    marginBottom: 8,
                }}><MaterialCommunityIcons name="circle" color={'#197B5C'} /> Escritório</Text>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    width: '45%',
                    marginBottom: 8,
                }}><MaterialCommunityIcons name="circle" color={'#197B5C'} /> Piscina</Text>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                    width: '45%',
                    marginBottom: 8,
                }}><MaterialCommunityIcons name="circle" color={'#197B5C'} /> Despósito</Text>
                
            </View>
        </View>
    )
}

export default ImmobileAmenities;