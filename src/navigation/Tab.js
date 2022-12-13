import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "../screens/Home";
import Contact from "../screens/Contact";

const TabNavigation = createBottomTabNavigator();

function Tab() {
    return (
        <TabNavigation.Navigator screenOptions={({ route }) => ({
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
            headerShown: false
        })}>
            <TabNavigation.Screen name="Home" component={Home} />
            <TabNavigation.Screen name="Contato" component={Contact} />
        </TabNavigation.Navigator>
    )
}

export default Tab;