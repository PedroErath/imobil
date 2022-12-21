import React from "react";
import {TouchableOpacity, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function LogoutButton (props){

    function Logout() {
        auth().signOut()
            .then(() => {
                props.navigation.navigate('Corretor')
            })
    }

    return(
        <TouchableOpacity onPress={Logout}
                    style={{
                        backgroundColor: 'red',
                        padding: 5,
                        borderRadius: 10,
                        position: 'absolute',
                        right: 10,
                        bottom: 20,
                        opacity: 0.7
                        
                    }}>
                    <MaterialCommunityIcons name="logout" size={30} color='#fff' />
                </TouchableOpacity>
    )
}

export default LogoutButton;