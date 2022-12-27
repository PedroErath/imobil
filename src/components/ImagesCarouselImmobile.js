import React from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ImagesCarouselImmobile(props) {

    return (
        <View>
            <View style={{
                height: 350
            }}>
                <Image source={require('../images/house-primary.jpg')} resizeMode='stretch' style={{
                    height: '100%',
                    width: '100%'
                }} />
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate(props.route.params.route.name == 'Meus Imoveis' ? 'Meus Imoveis' : 'Home')}
                style={{
                    position: 'absolute',
                    marginLeft: 10,
                    marginTop: 10,
                    opacity: 0.8
                }}>
                <MaterialCommunityIcons name="arrow-left-circle" size={50} color='#737373' />
            </TouchableOpacity>

            <View style={{
                marginTop: -25,
                marginBottom: 24
            }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: 18,
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity>
                        <Image source={require('../images/house-primary.jpg')} resizeMode='stretch' style={{
                            width: 100,
                            height: 55,
                            borderRadius: 10,
                            marginHorizontal: 5
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/small-house.jpg')} resizeMode='stretch' style={{
                            width: 100,
                            height: 55,
                            borderRadius: 10,
                            marginHorizontal: 5
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/small-house.jpg')} resizeMode='stretch' style={{
                            width: 100,
                            height: 55,
                            borderRadius: 10,
                            marginHorizontal: 5
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/small-house.jpg')} resizeMode='stretch' style={{
                            width: 100,
                            height: 55,
                            borderRadius: 10,
                            marginHorizontal: 5
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/small-house.jpg')} resizeMode='stretch' style={{
                            width: 100,
                            height: 55,
                            borderRadius: 10,
                            marginHorizontal: 5
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/small-house.jpg')} resizeMode='stretch' style={{
                            width: 100,
                            height: 55,
                            borderRadius: 10,
                            marginHorizontal: 5
                        }} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export default ImagesCarouselImmobile;