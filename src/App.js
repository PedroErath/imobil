import React from "react";
import { View, ScrollView, StyleSheet, ImageBackground, Text, TouchableOpacity, Image } from "react-native";
import imageBackgroundFull from './images/home-background-image.jpg';
import ArrowIcon from './images/arrow-icon.png';
import BannerHome from "./components/BannerHome";
import SearchBar from "./components/SerchBar";
import CardCategory from "./components/CardCategory";
import CardImmobile from "./components/CardImmobile";


function App() {
  return (
    <View style={style.container}>
      <BannerHome />
      <View style={style.bodyContainer}>
        <ImageBackground source={imageBackgroundFull} style={style.imageBackgroundFull}>
          <SearchBar />
          <ScrollView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
              height: 78,
              flexDirection: "row",
              marginTop: 24,
              paddingLeft: 7
            }}>
              <CardCategory icon={require('./images/apartament-icon.png')} name='Apartamento' />
              <CardCategory icon={require('./images/house-icon.png')} name='Casa' />
              <CardCategory icon={require('./images/house-apartament-icon.png')} name='Sala Comercial' />
              <CardCategory icon={require('./images/house-two-floors-icon.png')} name='Duplex' />
            </ScrollView>
            <View style={{
              marginHorizontal: 23,
              flexDirection: "row",
              justifyContent: "space-between"
            }}>
              <Text style={style.titleSection}>Destaques</Text>
              <TouchableOpacity style={style.button}>
                <Text style={style.titleBtn}>Ver todos </Text>
                <Image source={ArrowIcon} />
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
              flexDirection: 'row',
              paddingLeft: 7,
              height: 350,
              marginTop: 24
            }}>
              <CardImmobile
                imageBanner={require('./images/house-banner-card.jpg')}
                title='Casa - Ana Nery'
                location='Rua Curitiba, 590, Ana Nery - Santa Cruz do Sul - RS'
                value='100.000'
                type="Venda"
                bedQuantity='2'
                size='18m2'
                bethQuantity='1'
                garageQuantity='2'
              />
              <CardImmobile
                imageBanner={require('./images/house-banner-card.jpg')}
                title='Casa - Ana Nery'
                location='Rua Curitiba, 590, Ana Nery - Santa Cruz do Sul - RS'
                value='100.000'
                type="Venda"
                bedQuantity='2'
                size='18m2'
                bethQuantity='1'
                garageQuantity='2'
              />
            </ScrollView>
            <View style={{
              marginHorizontal: 23,
              flexDirection: "row",
              justifyContent: "space-between"
            }}>
              <Text style={style.titleSection}>Santa Cruz do Sul</Text>
              <TouchableOpacity style={style.button}>
                <Text style={style.titleBtn}>Ver todos </Text>
                <Image source={ArrowIcon} />
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
              flexDirection: 'row',
              paddingLeft: 7,
              height: 350,
              marginTop: 24
            }}>
              <CardImmobile
                imageBanner={require('./images/house-banner-card.jpg')}
                title='Casa - Ana Nery'
                location='Rua Curitiba, 590, Ana Nery - Santa Cruz do Sul - RS'
                value='100.000'
                type="Venda"
                bedQuantity='2'
                size='18m2'
                bethQuantity='1'
                garageQuantity='2'
              />
              <CardImmobile
                imageBanner={require('./images/house-banner-card.jpg')}
                title='Casa - Ana Nery'
                location='Rua Curitiba, 590, Ana Nery - Santa Cruz do Sul - RS'
                value='100.000'
                type="Venda"
                bedQuantity='2'
                size='18m2'
                bethQuantity='1'
                garageQuantity='2'
              />
            </ScrollView>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 3,
  },
  imageBackgroundFull: {
    width: '100%',
    height: '100%'
  },
  categoryContainer: {
    maxHeight: 78,
    flexDirection: "row",
    marginTop: 24,
    paddingLeft: 7
  },
  titleSection: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    fontSize: 20
  },
  button: {
    flexDirection: "row",
    alignItems: "center"
  },
  titleBtn: {
    fontFamily: 'Montserrat-Bold',
    color: '#197B5C',
    fontSize: 16
  }
})

export default App;