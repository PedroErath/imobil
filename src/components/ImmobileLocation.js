import React from "react";
import { View, Text} from "react-native";
import MapView, {Marker, Circle} from "react-native-maps";


function ImmobileLocation(props) {
    return (
        <View style={{
            paddingHorizontal: 23,
            marginBottom: 23
        }}>
            <Text style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 16,
                color: 'black',
                marginBottom: 8
            }}>Localização:</Text>
            <Text style={{
                fontFamily:'Montserrat-Regular',
                fontSize:12,
                color:'#000',
                marginBottom: 8
            }}>{`${props.address}, ${props.district} - ${props.city}`}</Text>
            <MapView style={{
                width: '100%',
                height: 200,
                borderRadius: 5
            }}
                region={{
                    latitude: props.maplocation.latitude,
                    longitude: props.maplocation.longitude,
                    latitudeDelta: 0,
                    longitudeDelta: 0,
                }}
                maxZoomLevel={16}
                minZoomLevel={16}
            >
                <Circle center={{latitude:props.maplocation.latitude, longitude:props.maplocation.longitude}} radius={50} fillColor='#197B5C77' strokeWidth={0}/>
                <Marker coordinate={{latitude:props.maplocation.latitude, longitude:props.maplocation.longitude}}/>
            </MapView>
        </View>
    )
}

export default ImmobileLocation;