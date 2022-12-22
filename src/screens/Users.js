import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import SearchBar from '../components/SerchBar';
import LogoutButton from '../components/LogoutButton';

function Users(props) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        firestore().collection('users').onSnapshot((querySnapshot) => {
            const docsArray = []
            querySnapshot.docs.map((doc) => {
                docsArray.push(doc.data())
            })
            setUsers(docsArray)
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

                <ScrollView style={{
                    width: '100%',
                    height: '100%',
                }} contentContainerStyle={{
                    marginTop: 24,
                    marginBottom: 75
                }}>
                    {users.map((user) => {
                        if (user) return (
                            <View key={user.uid} style={{
                                flexDirection: 'row',
                                marginHorizontal: 23,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: '#197B5CBB',
                                marginBottom: 16,
                                borderRadius: 10,
                                padding: 10
                            }}>
                                <View style={{
                                    flex: 1
                                }}>
                                    <Text style={{
                                        fontFamily: 'Montserrat-Bold',
                                        color: '#fff'
                                    }}>{user.name}</Text>
                                    <Text style={{
                                        fontFamily: 'Montserrat-Regular',
                                        color: '#fff'
                                    }}>{user.email}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{
                                        fontFamily: 'Montserrat-Regular',
                                        color: '#fff'
                                    }}>{user.admin ? 'Admin' : 'Corretor'}</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>

                <LogoutButton {...props} />

            </ImageBackground>
        </View>
    )
}

export default Users;