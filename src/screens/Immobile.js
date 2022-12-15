import React from "react";
import { View, ScrollView } from 'react-native';
import ImagesCarouselImmobile from "../components/ImagesCarouselImmobile";
import TitleAndInfosImmobile from "../components/TitleAndInfosImmobile";
import ImmobileAmenities from "../components/ImmobileAmenities";
import ImmobileLocation from "../components/ImmobileLocation";
import BottomButton from "../components/BottomButton";
import ImmobileRealtor from "../components/ImmobileRealtor";

function Immobile(props) {
    return (
        <View>
            <ScrollView>
                <View style={{
                    flex: 1,
                    backgroundColor: '#ddd'
                }}>

                    <ImagesCarouselImmobile {...props}/>

                    <TitleAndInfosImmobile />

                    <ImmobileAmenities />

                    <ImmobileLocation />

                    <ImmobileRealtor />

                </View>
            </ScrollView>

            <BottomButton />
            
        </View>
    )
}

export default Immobile;