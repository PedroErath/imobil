import React from "react";
import { View, ScrollView, ImageBackground, Text, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import imageBackgroundFull from '../images/home-background-image.jpg';
import BannerHome from "../components/BannerHome";
import SearchBar from "../components/SerchBar";
import CardCategory from "../components/CardCategory";
import CardImmobile from "../components/CardImmobile";

function Home() {
  return (
    <View style={{
        flex: 1
    }}>
      <ScrollView>
        
        <BannerHome /> 

        <View style={{
            flex: 3,
            backgroundColor: '#ddd'
        }}>
          {/* <ImageBackground source={imageBackgroundFull}> */}

            <SearchBar /> 

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
              height: 78,
              flexDirection: "row",
              marginTop: 24,
              paddingLeft: 7
            }}>
              <CardCategory icon='office-building' name='Apartamento' />
              <CardCategory icon='home' name='Casa' />
              <CardCategory icon='home-city' name='Sala Comercial' />
              <CardCategory icon='home-modern' name='Duplex' />
            </ScrollView>

            <View style={{
              marginHorizontal: 23,
              flexDirection: "row",
              justifyContent: "space-between"
            }}>
              <Text style={{
                fontFamily: 'Montserrat-Bold',
                color: 'black',
                fontSize: 20
              }}>Destaques</Text>
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

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
              flexDirection: 'row',
              paddingLeft: 7,
              height: 330,
              marginTop: 24
            }}>
              <CardImmobile
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

            <View style={{
              marginHorizontal: 23,
              flexDirection: "row",
              justifyContent: "space-between"
            }}>
              <Text style={{
                fontFamily: 'Montserrat-Bold',
                color: 'black',
                fontSize: 20
              }}>Santa Cruz do Sul</Text>
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

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
              flexDirection: 'row',
              paddingLeft: 7,
              height: 350,
              marginTop: 24
            }}>
              <CardImmobile
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

          {/* </ImageBackground> */}
        </View>

      </ScrollView>
    </View>
  )
}

export default Home;