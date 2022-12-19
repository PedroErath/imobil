import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import auth from '@react-native-firebase/auth'

function RealtorProfile(props) {

    function Logout() {
        auth().signOut()
            .then(() => {
                props.navigation.navigate('Corretor')
            })
    }

    return (
        <View style={{
            flex: 1
        }}>
            <TouchableOpacity onPress={Logout}
                style={{
                    backgroundColor: 'red',
                    padding: 20,
                    borderRadius: 10,
                    width: 80
                }}>
                <Text style={{
                    textAlign: 'center'
                }}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RealtorProfile;