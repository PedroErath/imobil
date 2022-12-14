import React from "react";
import { View, ScrollView, Image } from "react-native";

function ImagesCarouselImmobile() {
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
            <View style={{
                marginTop: -25,
                marginBottom: 24
            }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: 18,
                    justifyContent: 'space-between'
                }}>
                    <Image source={require('../images/house-primary.jpg')} resizeMode='stretch' style={{
                        width: 100,
                        height: 55,
                        borderRadius: 10,
                        marginHorizontal: 5
                    }} />
                    <Image source={require('../images/small-house.jpg')} resizeMode='stretch' style={{
                        width: 100,
                        height: 55,
                        borderRadius: 10,
                        marginHorizontal: 5
                    }} />
                    <Image source={require('../images/small-house.jpg')} resizeMode='stretch' style={{
                        width: 100,
                        height: 55,
                        borderRadius: 10,
                        marginHorizontal: 5
                    }} />
                    <Image source={require('../images/small-house.jpg')} resizeMode='stretch' style={{
                        width: 100,
                        height: 55,
                        borderRadius: 10,
                        marginHorizontal: 5
                    }} />
                    <Image source={require('../images/small-house.jpg')} resizeMode='stretch' style={{
                        width: 100,
                        height: 55,
                        borderRadius: 10,
                        marginHorizontal: 5
                    }} />
                    <Image source={require('../images/small-house.jpg')} resizeMode='stretch' style={{
                        width: 100,
                        height: 55,
                        borderRadius: 10,
                        marginHorizontal: 5
                    }} />
                </ScrollView>
            </View>
        </View>
    )
}

export default ImagesCarouselImmobile;