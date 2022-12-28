import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import BannerHomeTop from "../components/BannerHomeTop";
import SearchBar from "../components/SerchBar";
import ButtonCategory from "../components/ButtonCategory";
import firestore from '@react-native-firebase/firestore';
import CardImmobile from "../components/CardImmobile";
import TitleSectionCardImmobile from "../components/TitleSectionCardImmobile";

function Home(props) {

  const [immobiles, setImmobiles] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    firestore().collection('properties').onSnapshot((querySnapshot) => {
      const ImmobilesArray = []
      querySnapshot.docs.map((doc) => {
        if (doc.data().title.indexOf(search) >= 0) {
          ImmobilesArray.push(doc)
        }
      })
      setImmobiles(ImmobilesArray)
    }, (error) => {
      console.log(error)
    })
  }, [search])

  function SetStateSearchComponent(childData) {
    setSearch(childData)
  }

  return (
    <View>
      <ScrollView>

        <BannerHomeTop />

        <View style={{
          flex: 3,
          backgroundColor: '#ddd'
        }}>

          <SearchBar placeholder='O que você procura' SetStateSearchComponent={SetStateSearchComponent} />

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 15,
              paddingHorizontal: 15
            }}
            style={{
              flexDirection: "row",
              marginTop: 24
            }}>
            <ButtonCategory icon='office-building' name='Apartamento' />
            <ButtonCategory icon='home' name='Casa' />
            <ButtonCategory icon='home-city' name='Sala Comercial' />
            <ButtonCategory icon='home-modern' name='Duplex' />
          </ScrollView>

          <TitleSectionCardImmobile title='Destaques' />

          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 7,
              marginTop: 24,
              marginBottom: 10
            }}
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            {immobiles.map((immobile, index) => {
              if (Number(immobile.data().ranking) >= 4.5) {
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

          <TitleSectionCardImmobile title='Santa Cruz do Sul' />

          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 7,
              marginTop: 24,
              marginBottom: 10
            }}
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            {immobiles.map((immobile, index) => {
              if (immobile.data().city == 'Santa Cruz do Sul - RS') {
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

          <TitleSectionCardImmobile title='Vera Cruz' />

          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 7,
              marginTop: 24,
              marginBottom: 10
            }}
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            {immobiles.map((immobile, index) => {
              if (immobile.data().city == 'Vera Cruz - RS') {
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

          <TitleSectionCardImmobile title='Rio Pardo' />

          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 7,
              marginTop: 24,
              marginBottom: 24
            }}
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            {immobiles.map((immobile, index) => {
              if (immobile.data().city == 'Rio Pardo - RS') {
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

        </View>

      </ScrollView>
    </View>
  )
}

export default Home;