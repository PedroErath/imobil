import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import BannerHomeTop from "../components/BannerHomeTop";
import SearchBar from "../components/SerchBar";
import TitleSectionCardImmobile from "../components/TitleSectionCardImmobile";
import CardImmobile from "../components/CardImmobile";

function MyImmobiles() {

    const [myImmobiles, setMyImmobiles] = useState([])
    const [search, setSearch] = useState('')
    const userLogged = auth().currentUser

    useEffect(() => {
        firestore().collection('properties').where('realtor', '==', userLogged.displayName).onSnapshot((querySnapshot) => {
            const ImmobilesArray = []
            querySnapshot.docs.map((doc) => {
                if (doc.data().title.indexOf(search) >= 0) {
                    ImmobilesArray.push(doc.data())
                }
            })
            setMyImmobiles(ImmobilesArray)
        }, (error) => {
            console.log(error)
        })
    }, [search])

    function SetStateSearchComponent(childData) {
        setSearch(childData)
    }

    return (
        <View style={{
            flex: 1,
        }}>
            <BannerHomeTop />

            <SearchBar SetStateSearchComponent={SetStateSearchComponent} placeholder='Pesquise pelo nome' displayFilter='none' />

            <ScrollView style={{
                marginTop: 24
            }}>
                <TitleSectionCardImmobile title='Santa Cruz do Sul' button='none' />


                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
                    flexDirection: 'row',
                    height: 330,
                    marginTop: 24
                }}>
                    {myImmobiles.map((immobile, index) => {
                        if (immobile.city === 'Santa Cruz do Sul - RS') {
                            return (
                                <CardImmobile
                                    key={index}
                                    imageBanner={require('../images/house-banner-card.jpg')}
                                    title={immobile.title}
                                    location={`${immobile.address}, ${immobile.district} - ${immobile.city}`}
                                    value={immobile.price}
                                    type={immobile.negociationtype}
                                    bedQuantity={immobile.bedrooms}
                                    size={immobile.size}
                                    bethQuantity={immobile.restrooms}
                                    garageQuantity={immobile.garages}
                                />
                            )
                        }
                    })}
                </ScrollView>

                <TitleSectionCardImmobile title='Vera Cruz' button='none' />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
                    flexDirection: 'row',
                    height: 330,
                    marginTop: 24
                }}>
                    {myImmobiles.map((immobile, index) => {
                        if (immobile.city === 'Vera Cruz - RS') {
                            return (
                                <CardImmobile
                                    key={index}
                                    imageBanner={require('../images/house-banner-card.jpg')}
                                    title={immobile.title}
                                    location={`${immobile.address}, ${immobile.district} - ${immobile.city}`}
                                    value={immobile.price}
                                    type={immobile.negociationtype}
                                    bedQuantity={immobile.bedrooms}
                                    size={immobile.size}
                                    bethQuantity={immobile.restrooms}
                                    garageQuantity={immobile.garages}
                                />
                            )
                        }
                    })}
                </ScrollView>

                <TitleSectionCardImmobile title='Rio Pardo' button='none' />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
                    flexDirection: 'row',
                    height: 330,
                    marginTop: 24
                }}>
                    {myImmobiles.map((immobile, index) => {
                        if (immobile.city === 'Rio Pardo - RS') {
                            return (
                                <CardImmobile
                                    key={index}
                                    imageBanner={require('../images/house-banner-card.jpg')}
                                    title={immobile.title}
                                    location={`${immobile.address}, ${immobile.district} - ${immobile.city}`}
                                    value={immobile.price}
                                    type={immobile.negociationtype}
                                    bedQuantity={immobile.bedrooms}
                                    size={immobile.size}
                                    bethQuantity={immobile.restrooms}
                                    garageQuantity={immobile.garages}
                                />
                            )
                        }
                    })}
                </ScrollView>
            </ScrollView>
        </View>
    )
}

export default MyImmobiles;