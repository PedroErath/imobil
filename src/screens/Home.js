import React from "react";
import { View, ScrollView } from "react-native";
import BannerHomeTop from "../components/BannerHomeTop";
import SearchBar from "../components/SerchBar";
import ButtonCategory from "../components/ButtonCategory";
import CardImmobile from "../components/CardImmobile";
import TitleSectionCardImmobile from "../components/TitleSectionCardImmobile";

function Home(props) {
  return (
    <View>
      <ScrollView>

        <BannerHomeTop />

        <View style={{
          flex: 3,
          backgroundColor: '#ddd'
        }}>

          <SearchBar placeholder='O que você procura' />

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
            height: 78,
            flexDirection: "row",
            marginTop: 24,
            paddingLeft: 7
          }}>
            <ButtonCategory icon='office-building' name='Apartamento' />
            <ButtonCategory icon='home' name='Casa' />
            <ButtonCategory icon='home-city' name='Sala Comercial' />
            <ButtonCategory icon='home-modern' name='Duplex' />
          </ScrollView>

          <TitleSectionCardImmobile title='Destaques' />

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
            flexDirection: 'row',
            paddingLeft: 7,
            height: 330,
            marginTop: 24
          }}>
            <CardImmobile
              {...props}
              imageBanner={require('../images/house-banner-card.jpg')}
              title='Casa - Ana Nery'
              location='Rua Curitiba, 590, Ana Nery - Santa Cruz do Sul - RS'
              value='100.000'
              type="Venda"
              bedQuantity='2'
              size='18'
              bethQuantity='1'
              garageQuantity='2'
            />
            <CardImmobile
              {...props}
              imageBanner={require('../images/house-banner-card.jpg')}
              title='Casa - Ana Nery'
              location='Rua Curitiba, 590, Ana Nery - Santa Cruz do Sul - RS'
              value='100.000'
              type="Venda"
              bedQuantity='2'
              size='18'
              bethQuantity='1'
              garageQuantity='2'
            />
          </ScrollView>

          <TitleSectionCardImmobile title='Santa Cruz do Sul' />

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
            flexDirection: 'row',
            paddingLeft: 7,
            height: 350,
            marginTop: 24
          }}>
            <CardImmobile
              {...props}
              imageBanner={require('../images/house-banner-card.jpg')}
              title='Casa - Ana Nery'
              location='Rua Curitiba, 590, Ana Nery - Santa Cruz do Sul - RS'
              value='100.000'
              type="Venda"
              bedQuantity='2'
              size='18'
              bethQuantity='1'
              garageQuantity='2'
            />
            <CardImmobile
              {...props}
              imageBanner={require('../images/house-banner-card.jpg')}
              title='Casa - Ana Nery'
              location='Rua Curitiba, 590, Ana Nery - Santa Cruz do Sul - RS'
              value='100.000'
              type="Venda"
              bedQuantity='2'
              size='18'
              bethQuantity='1'
              garageQuantity='2'
            />
          </ScrollView>

        </View>

      </ScrollView>
    </View>
  )
}

export default Home;