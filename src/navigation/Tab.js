import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Immobile from "../screens/Immobile";
import RealtorLogin from "../screens/RealtorLogin";
import ImmobileRegister from "../screens/ImmobileRegister";
import MyImmobiles from "../screens/MyImmobiles";
import RealtorProfile from "../screens/RealtorProfile";

const TabNavigation = createBottomTabNavigator();

function Tab() {

    const [user, setUser] = useState()
    const [initializing, setInitializing] = useState(true)

    function onAuthStateChanged(user) {
        setUser(user);
        initializing ? setInitializing(false) : null
    }

    useEffect(() => {
        const validation = auth().onAuthStateChanged(onAuthStateChanged);
        return validation
    }, [])

    if (!initializing) {
        return (
            <TabNavigation.Navigator
                initialRouteName={user ? "Meus Imoveis" : "Home"}
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
                            default:
                                break;
                        }

                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#197B5C',
                    tabBarLabelStyle: { fontSize: 14, fontFamily: 'Montserrat-Bold' },
                    headerShown: false,
                })}><>
                    <TabNavigation.Screen name="Home" component={Home} options={{ tabBarItemStyle: { display: !user ? null : 'none' } }} />
                    <TabNavigation.Screen name="Contato" component={Contact} options={{ tabBarItemStyle: { display: !user ? null : 'none' } }} />
                    <TabNavigation.Screen name="Corretor" component={RealtorLogin} options={{ tabBarItemStyle: { display: !user ? null : 'none' } }} />
                    <TabNavigation.Screen name="Meus Imoveis" component={MyImmobiles} options={{ tabBarItemStyle: { display: user ? null : 'none' } }} />
                    <TabNavigation.Screen name="Registrar Imovel" component={ImmobileRegister} options={{ tabBarItemStyle: { display: user ? null : 'none' } }} />
                    <TabNavigation.Screen name="Perfil" component={RealtorProfile} options={{ tabBarItemStyle: { display: user ? null : 'none' } }} />
                    <TabNavigation.Screen name="Imovel" component={Immobile} options={{ tabBarItemStyle: { display: 'none' }, tabBarStyle: { display: 'none' } }} />
                </>
            </TabNavigation.Navigator>
        )
    }
}

export default Tab;