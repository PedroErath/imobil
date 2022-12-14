import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CarouselImagesImmobile from "../components/CarouselImagesImmobile";
import InfosImmobileIcons from "../components/InfosImmobileIcons";

function Immobile() {
    return (
        <View>
            <ScrollView>
                <View style={{
                    flex: 1,
                    backgroundColor: '#ddd'
                }}>
                    <CarouselImagesImmobile />
                    <View>
                        <View style={{
                            paddingHorizontal: 23,
                            paddingBottom: 16,
                            flexDirection: "row",
                            justifyContent: 'space-between',
                            alignItems: "center"
                        }}>
                            <View>
                                <Text style={{
                                    fontFamily: 'Montserrat-Bold',
                                    color: '#000',
                                    fontSize: 20,
                                    marginBottom: 5
                                }}>Casa - Ana Nery</Text>
                                <View style={{
                                    flexDirection: "row"
                                }}>
                                    <Text style={{
                                        fontFamily: 'Montserrat-Regular',
                                        color: '#737373'
                                    }}>Casa</Text>
                                    <MaterialCommunityIcons name="circle-small" size={20} color='#737373' />
                                    <MaterialCommunityIcons name="star" size={18} color='#EFBA00' />
                                    <Text style={{
                                        fontFamily: 'Montserrat-Bold',
                                        color: '#000'
                                    }}>4.5 <Text style={{
                                        fontFamily: 'Montserrat-Regular',
                                        color: '#737373'
                                    }}>(542)</Text></Text>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: '#197B5C',
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 10,
                                elevation: 15,
                                shadowColor: '#000'
                            }}>
                                <Text style={{
                                    fontFamily: 'Montserrat-Bold',
                                    fontSize: 20,
                                    color: '#fff'
                                }}>R$100.000</Text>
                                <Text style={{
                                    fontFamily: 'Montserrat-Bold',
                                    fontSize: 16,
                                    color: 'red'
                                }}>Venda</Text>
                            </View>
                        </View>
                        <View style={{
                            paddingHorizontal: 23,
                            marginBottom: 23
                        }}>
                            <InfosImmobileIcons
                                bedQuantity={2}
                                size={18}
                                bethQuantity={1}
                                garageQuantity={2}
                                iconSize={26}
                                fontSize={16}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Immobile;