import React from "react";
import { View, ScrollView } from 'react-native';
import ImagesCarouselImmobile from "../components/ImagesCarouselImmobile";
import TitleAndInfosImmobile from "../components/TitleAndInfosImmobile";
import ImmobileAmenities from "../components/ImmobileAmenities";
import ImmobileLocation from "../components/ImmobileLocation";
import BottomButton from "../components/BottomButton";

function Immobile() {
    return (
        <View>
            <ScrollView>
                <View style={{
                    flex: 1,
                    backgroundColor: '#ddd'
                }}>

                    <ImagesCarouselImmobile />

                    <TitleAndInfosImmobile />

                    <ImmobileAmenities />

                    <ImmobileLocation />

                </View>
            </ScrollView>

            <BottomButton />
            
        </View>
    )
}

export default Immobile;