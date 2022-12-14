import React from "react";
import { View, ScrollView, Image } from "react-native";

function CarouselImagesImmobile() {
    return (
        <View>
            <View style={{
                height: 350
            }}>
                <Image source={require('../images/house-primary.jpg')} style={{
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
                    <Image source={require('../images/small-house.jpg')} style={{
                        borderRadius: 10,
                        marginHorizontal: 5
                    }} />
                    <Image source={require('../images/small-house.jpg')} style={{
                        borderRadius: 10,
                        marginHorizontal: 5
                    }} />
                    <Image source={require('../images/small-house.jpg')} style={{
                        borderRadius: 10,
                        marginHorizontal: 5
                    }} />
                    <Image source={require('../images/small-house.jpg')} style={{
                        borderRadius: 10,
                        marginHorizontal: 5
                    }} />
                    <Image source={require('../images/small-house.jpg')} style={{
                        borderRadius: 10,
                        marginHorizontal: 5
                    }} />
                    <Image source={require('../images/small-house.jpg')} style={{
                        borderRadius: 10,
                        marginHorizontal: 5
                    }} />
                </ScrollView>
            </View>
        </View>
    )
}

export default CarouselImagesImmobile;