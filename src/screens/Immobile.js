import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import ImagesCarouselImmobile from "../components/ImagesCarouselImmobile";
import TitleAndInfosImmobile from "../components/TitleAndInfosImmobile";

function Immobile() {
    return (
        <View>
            <ScrollView>
                <View style={{
                    flex: 1,
                    backgroundColor: '#ddd'
                }}>
                    <ImagesCarouselImmobile />

                    <View>

                        <TitleAndInfosImmobile />

                        <Text>Comodidades</Text>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Immobile;