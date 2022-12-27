import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import BannerHomeTop from "../components/BannerHomeTop";
import SearchBar from "../components/SerchBar";
import TitleSectionCardImmobile from "../components/TitleSectionCardImmobile";
import CardImmobile from "../components/CardImmobile";

function MyImmobiles(props) {

    const [myImmobiles, setMyImmobiles] = useState([])
    const [search, setSearch] = useState('')
    const userLogged = auth().currentUser

    useEffect(() => {
        firestore().collection('properties').where('realtor', '==', userLogged.uid).onSnapshot((querySnapshot) => {
            const ImmobilesArray = []
            querySnapshot.docs.map((doc) => {
                
                if (doc.data().title.indexOf(search) >= 0) {
                    ImmobilesArray.push(doc)
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

            <SearchBar SetStateSearchComponent={SetStateSearchComponent} placeholder='Pesquise pelo título' displayFilter='none' />

            <ScrollView contentContainerStyle={{
                paddingBottom: 24
            }}>
                <TitleSectionCardImmobile title='Santa Cruz do Sul' button='none' />


                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
                    flexDirection: 'row',
                    flex: 1,
                    marginTop: 16
                }}>
                    {myImmobiles.map((immobile, index) => {
                        if (immobile.data().city === 'Santa Cruz do Sul - RS') {
                            return (
                                <CardImmobile
                                    {...props}
                                    immobile={immobile.data()}
                                    id={immobile.id}
                                    key={index}
                                />
                            )
                        }
                    })}
                </ScrollView>

                <TitleSectionCardImmobile title='Vera Cruz' button='none' />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
                    flexDirection: 'row',
                    flex: 1,
                    marginTop: 16
                }}>
                    {myImmobiles.map((immobile, index) => {
                        if (immobile.data().city === 'Vera Cruz - RS') {
                            return (
                                <CardImmobile
                                    {...props}
                                    immobile={immobile.data()}
                                    id={immobile.id}
                                    key={index}
                                />
                            )
                        }
                    })}
                </ScrollView>

                <TitleSectionCardImmobile title='Rio Pardo' button='none' />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
                    flexDirection: 'row',
                    flex: 1,
                    marginTop: 16
                }}>
                    {myImmobiles.map((immobile, index) => {
                        if (immobile.data().city === 'Rio Pardo - RS') {
                            return (
                                <CardImmobile
                                    {...props}
                                    immobile={immobile.data()}
                                    id={immobile.id}
                                    key={index}
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