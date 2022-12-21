import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Immobile from "../screens/Immobile";
import RealtorLogin from "../screens/RealtorLogin";
import ImmobileRegister from "../screens/ImmobileRegister";
import MyImmobiles from "../screens/MyImmobiles";
import RealtorProfile from "../screens/RealtorProfile";
import UserRegister from "../screens/UserRegister";
import Users from "../screens/Users";

const TabNavigation = createBottomTabNavigator();

function Tab() {

    const [userLogged, setUserLogged] = useState()
    const [initializing, setInitializing] = useState(true)

    async function onAuthStateChanged(user) {

        if (user) {
            const userInfo = await firestore().collection('users').doc(user.uid).get()
            setUserLogged(userInfo.data())
        }else{
            setUserLogged(user)
        }
        initializing ? setInitializing(false) : null
    }

    useEffect(() => {
        const validation = auth().onAuthStateChanged(onAuthStateChanged);
        return validation
    }, [])

    if (!initializing) {
        return (
            <TabNavigation.Navigator
                initialRouteName={!userLogged ? "Home" : userLogged.admin ? "Registrar Usuario" : "Meus Imoveis"}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        switch (route.name) {
                            case 'Home':
                                iconName = focused
                                    ? 'home'
                                    : 'home-outline';
                                break;
                            case 'Contato':
                                iconName = focused
                                    ? 'phone-forward'
                                    : 'phone-forward-outline';
                                break;
                            case 'Corretor':
                                iconName = focused
                                    ? 'account-wrench'
                                    : 'account-wrench-outline';
                                break;
                            case 'Registrar Imovel':
                                iconName = focused
                                    ? 'home-plus'
                                    : 'home-plus-outline';
                                break;
                            case 'Meus Imoveis':
                                iconName = focused
                                    ? 'home-group'
                                    : 'home-group';
                                break;
                            case 'Perfil':
                                iconName = focused
                                    ? 'account'
                                    : 'account-outline';
                                break;
                            case 'Registrar Usuario':
                                iconName = focused
                                    ? 'account-plus'
                                    : 'account-plus-outline';
                                break;
                            case 'Usuarios':
                                iconName = focused
                                    ? 'account-multiple'
                                    : 'account-multiple-outline';
                                break;
                            default:
                                break;
                        }

                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#197B5C',
                    tabBarLabelStyle: { fontSize: 14, fontFamily: 'Montserrat-Bold', paddingBottom: 5 },
                    tabBarStyle: { height: 50, paddingTop: 5 },
                    headerShown: false,
                })}>
                <TabNavigation.Screen name="Home" component={Home} options={{ tabBarItemStyle: { display: !userLogged ? null : 'none' } }} />
                <TabNavigation.Screen name="Contato" component={Contact} options={{ tabBarItemStyle: { display: !userLogged ? null : 'none' } }} />
                <TabNavigation.Screen name="Corretor" component={RealtorLogin} options={{ tabBarItemStyle: { display: !userLogged ? null : 'none' } }} />
                <TabNavigation.Screen name="Meus Imoveis" component={MyImmobiles} options={{ tabBarItemStyle: { display: !userLogged ? 'none' : userLogged.admin ? 'none' : null } }} />
                <TabNavigation.Screen name="Registrar Imovel" component={ImmobileRegister} options={{ tabBarItemStyle: { display: !userLogged ? 'none' : userLogged.admin ? 'none' : null } }} />
                <TabNavigation.Screen name="Perfil" component={RealtorProfile} options={{ tabBarItemStyle: { display: !userLogged ? 'none' : userLogged.admin ? 'none' : null } }} />
                <TabNavigation.Screen name="Registrar Usuario" component={UserRegister} options={{ tabBarItemStyle: { display: !userLogged ? 'none' : userLogged.admin ? null : 'none' } }} />
                <TabNavigation.Screen name="Usuarios" component={Users} options={{ tabBarItemStyle: { display: !userLogged ? 'none' : userLogged.admin ? null : 'none' } }} />
                <TabNavigation.Screen name="Imovel" component={Immobile} options={{ tabBarItemStyle: { display: 'none' }, tabBarStyle: { display: 'none' } }} />
            </TabNavigation.Navigator>
        )
    }
}

export default Tab;