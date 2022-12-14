import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function TitleSectionCardImmobile(props){
    return(
        <View style={{
            marginHorizontal: 23,
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
            <Text style={{
              fontFamily: 'Montserrat-Bold',
              color: 'black',
              fontSize: 20
            }}>{props.title}</Text>
            <TouchableOpacity style={{
              flexDirection: "row",
              alignItems: "center"
            }}>
              <Text style={{
                fontFamily: 'Montserrat-Bold',
                color: '#197B5C',
                fontSize: 16
              }}>Ver todos </Text>
              <MaterialCommunityIcons name="chevron-right" size={24} color='#197B5C' />
            </TouchableOpacity>
          </View>
    )
}

export default TitleSectionCardImmobile;