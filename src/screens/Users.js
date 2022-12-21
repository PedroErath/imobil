import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import SearchBar from '../components/SerchBar';
import LogoutButton from '../components/LogoutButton';

function Users(props) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        firestore().collection('users').onSnapshot((querySnapshot)=>{ 
            console.log(querySnapshot.docs)
        }, (error) => {
            console.log(error)
        })
    }, [])

    return (
        <View style={{
            flex: 1
        }}>
            <ImageBackground source={require('../images/loading-page-image.jpg')} resizeMode='cover' blurRadius={4} style={{
                flex: 1,
                width: '100%',
                height: '100%',
                alignItems: "center"
            }}>
               <Text style={{
                    fontSize: 64,
                    color: '#197B5C',
                    fontFamily: "Montserrat-Bold",
                    marginBottom: 25
                }}>Usuários</Text>

                <SearchBar />

                <LogoutButton {...props} />

            </ImageBackground>
        </View>
    )
}

export default Users;