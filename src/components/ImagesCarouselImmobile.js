import React, { useState, useEffect } from "react";
import storage from '@react-native-firebase/storage';
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ImagesCarouselImmobile(props) {

    const [selectedImage, setSelectedImage] = useState()
    const [allImages, setAllImages] = useState([])

    useEffect(() => {
        getImagesFromStorage()
    }, [props])

    function getImagesFromStorage() {
        const directoryRereference = storage().ref(`immobiles/${props.id}/`)

        directoryRereference.listAll()
            .then(async (list) => {
                const arrayImages = []
                for (let i = 0; i < list.items.length; i++) {
                    await storage().ref(list.items[i].fullPath).getDownloadURL()
                        .then((url) => {
                            arrayImages.push(url)
                        })
                        .catch(error => {
                            console.log(`Error get image to carousel: ${error}`)
                        })
                }
                setAllImages(arrayImages)
                setSelectedImage(arrayImages[0])
            })
            .catch(erro => {
                console.log(`Erro ListAll storage:${erro}`)
            })
    }

    return (
        <View>
            <View style={{
                height: 350
            }}>
                <Image source={{ uri: selectedImage }} resizeMode='stretch' style={{
                    height: '100%',
                    width: '100%'
                }} />
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate(props.route.params.route.name == 'Meus Imoveis' ? 'Meus Imoveis' : 'Home')}
                style={{
                    position: 'absolute',
                    marginLeft: 10,
                    marginTop: 10,
                    opacity: 0.8
                }}>
                <MaterialCommunityIcons name="arrow-left-circle" size={50} color='#222' />
            </TouchableOpacity>

            <View style={{
                marginTop: -25,
                marginBottom: 24
            }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: 18,
                    justifyContent: 'space-between'
                }}>
                    {allImages.map((image, index) => {
                        return (
                            <TouchableOpacity onPress={() => setSelectedImage(image)}
                                key={index}>
                                <Image source={{ uri: image }} resizeMode='stretch' style={{
                                    width: 100,
                                    height: 55,
                                    borderRadius: 10,
                                    marginHorizontal: 5
                                }} />
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

export default ImagesCarouselImmobile;