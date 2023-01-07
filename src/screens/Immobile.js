import React from "react";
import { View, ScrollView, LogBox } from 'react-native';
import ImagesCarouselImmobile from "../components/ImagesCarouselImmobile";
import TitleAndInfosImmobile from "../components/TitleAndInfosImmobile";
import ImmobileAmenities from "../components/ImmobileAmenities";
import ImmobileLocation from "../components/ImmobileLocation";
import BottomButton from "../components/BottomButton";
import ImmobileRealtor from "../components/ImmobileRealtor";

function Immobile(props) {

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
        'Possible Unhandled Promise Rejection'
    ]);

    return (
        <View>
            <ScrollView>
                <View style={{
                    flex: 1,
                    backgroundColor: '#ddd'
                }}>

                    <ImagesCarouselImmobile {...props} id={props.route.params.id} />

                    <TitleAndInfosImmobile {...props.route.params.immobile} />

                    <ImmobileAmenities {...props.route.params.immobile} />

                    <ImmobileLocation {...props.route.params.immobile} />

                    <ImmobileRealtor {...props.route.params.immobile} />

                </View>
            </ScrollView>

            <BottomButton {...props.route.params.immobile}/>

        </View>
    )
}

export default Immobile;