import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Keyboard } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function ImmobileRegister(props) {

    const [immobile, setImmobile] = useState({})
    const userLogged = auth().currentUser
    const [responseMessage, setResponseMessage] = useState({})

    // Multiple select Amenities
    const [amenities, setAmenities] = useState([])
    const [amenitiesOpen, setAmenitiesOpen] = useState(false)
    const [amenitiesItems, setAmenitiesItems] = useState([
        { label: 'Ar condicionado', value: 'Ar condicionado' },
        { label: 'Churrasqueira', value: 'Churrasqueira' },
        { label: 'Área de serviço', value: 'Área de Servido' },
        { label: 'Sacada', value: 'Sacada' },
        { label: 'Sala de estar', value: 'Sala de estar' },
        { label: 'Jardim', value: 'Jardim' },
        { label: 'Cozinha Americana', value: 'Cozinha Americana' },
    ])

    //Select Negotiation Type
    const [negotiationType, setNegotiationType] = useState([])
    const [negotiationTypeOpen, setNegotiationTypeOpen] = useState(false)
    const [negotiationTypeItems, setNegotiationTypeItems] = useState([
        { label: 'Venda', value: 'Venda' },
        { label: 'Aluguel', value: 'Aluguel' },
        { label: 'Venda|Aluguel', value: 'Venda|Aluguel' },
    ])

    //Select Immobile Type
    const [immobileType, setImmobileType] = useState([])
    const [immobileTypeOpen, setImmobileTypeOpen] = useState(false)
    const [immobileTypeItems, setImmobileTypeItems] = useState([
        { label: 'Casa', value: 'Casa' },
        { label: 'Apartamento', value: 'Apartamento' },
        { label: 'Duplex', value: 'Duplex' },
        { label: 'Sala Comercial', value: 'Sala Comercial' },
    ])
    //Select City
    const [city, setCity] = useState([])
    const [cityOpen, setCityOpen] = useState(false)
    const [cityItems, setCityItems] = useState([
        { label: 'Santa Cruz do Sul - RS', value: 'Santa Cruz do Sul - RS' },
        { label: 'Vera Cruz - RS', value: 'Vera Cruz - RS' },
        { label: 'Rio Pardo - RS', value: 'Rio Pardo - RS' }
    ])

    function onImmobileAndNegociationTypeOpen () {
        Keyboard.dismiss()
        setCityOpen(false)
    }

    function Register() {
        if (immobile.title &&
            immobile.address &&
            immobile.district &&
            immobile.price &&
            immobile.ranking &&
            immobile.bedrooms &&
            immobile.restrooms &&
            immobile.garages &&
            immobile.size &&
            city &&
            amenities &&
            negotiationType &&
            immobileType
        ) {
            firestore()
                .collection('properties')
                .add({
                    title: immobile.title,
                    address: immobile.address,
                    district: immobile.district,
                    city: city,
                    price: immobile.price,
                    ranking: immobile.ranking,
                    negotiationtype: negotiationType,
                    immobiletype: immobileType,
                    bedrooms: immobile.bedrooms,
                    restrooms: immobile.restrooms,
                    garages: immobile.garages,
                    size: immobile.size,
                    amenities: amenities,
                    realtor: userLogged.uid
                })
                .then(() => {
                    props.navigation.navigate('Meus Imoveis')
                    setCity([])
                    setAmenities([])
                    setImmobile({})
                    setNegotiationType([])
                    setImmobileType([])
                })
        } else {
            setResponseMessage({
                success: false,
                msg: 'Preencha todos os campos'
            })
        }
    }

    return (
        <View style={{
            flex: 1
        }}>
            <ImageBackground source={require('../images/image-background-contact.png')} resizeMode='cover' blurRadius={4} style={{
                flex: 1,
                width: '100%',
                height: '100%',
                justifyContent: "center",
                alignItems: "center",
            }}>
                <View style={{
                    width: '100%',
                    paddingHorizontal: 23
                }}>
                    <Text style={{
                        fontSize: 50,
                        color: '#197B5C',
                        fontFamily: "Montserrat-Bold",
                        textAlign: "center"
                    }}>Registrar Imóvel</Text>

                    <TextInput onChangeText={e => setImmobile({ ...immobile, title: e })}
                        placeholder="Titulo"
                        placeholderTextColor='#000'
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            marginBottom: 8
                        }}
                    />
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}>
                        <TextInput onChangeText={e => setImmobile({ ...immobile, address: e })}
                            placeholder="Rua, Número"
                            placeholderTextColor='#000'
                            style={{
                                flex: 1,
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 15,
                                marginBottom: 8,
                                marginRight: 5
                            }}
                        />
                        <TextInput onChangeText={e => setImmobile({ ...immobile, district: e })}
                            placeholder="Bairro"
                            placeholderTextColor='#000'
                            style={{
                                flex: 1,
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 15,
                                marginBottom: 8
                            }}
                        />
                    </View>
                    <DropDownPicker style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        borderRadius: 10,
                        paddingHorizontal: 15,
                        marginBottom: 8,
                        borderWidth: 0
                    }}
                        placeholder='Selecione a cidade'
                        onOpen={Keyboard.dismiss}
                        open={cityOpen}
                        setOpen={setCityOpen}
                        value={city}
                        setValue={setCity}
                        items={cityItems}
                        setItems={setCityItems}
                        mode="BADGE"
                        badgeDotColors='#197B5C'
                        dropDownDirection='TOP'
                    />
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}>
                        <TextInput onChangeText={e => setImmobile({ ...immobile, price: e })}
                            placeholder="Preço (R$)"
                            keyboardType="number-pad"
                            placeholderTextColor='#000'
                            style={{
                                flex: 1,
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 15,
                                marginBottom: 8,
                                marginRight: 5
                            }}
                        />
                        <TextInput onChangeText={e => setImmobile({ ...immobile, ranking: e })}
                            placeholder="Nota"
                            keyboardType="number-pad"
                            placeholderTextColor='#000'
                            style={{
                                flex: 1,
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 15,
                                marginBottom: 8
                            }}
                        />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            flex: 1,
                            marginRight: 5
                        }}>
                            <DropDownPicker placeholder="Tipo de negociação"
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: 10,
                                    paddingHorizontal: 15,
                                    marginBottom: 8,
                                    borderWidth: 0
                                }}
                                onOpen={onImmobileAndNegociationTypeOpen}
                                open={negotiationTypeOpen}
                                setOpen={setNegotiationTypeOpen}
                                value={negotiationType}
                                setValue={setNegotiationType}
                                items={negotiationTypeItems}
                                setItems={setNegotiationTypeItems}
                                dropDownDirection='TOP'
                            />
                        </View>
                        <View style={{
                            flex: 1
                        }}>
                            <DropDownPicker placeholder="Tipo de imóvel"
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: 10,
                                    paddingHorizontal: 15,
                                    marginBottom: 8,
                                    borderWidth: 0
                                }}
                                onOpen={onImmobileAndNegociationTypeOpen}
                                open={immobileTypeOpen}
                                setOpen={setImmobileTypeOpen}
                                value={immobileType}
                                setValue={setImmobileType}
                                items={immobileTypeItems}
                                setItems={setImmobileTypeItems}
                                dropDownDirection='TOP'
                            />
                        </View>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}>
                        <TextInput onChangeText={e => setImmobile({ ...immobile, bedrooms: e })}
                            placeholder="Quartos"
                            keyboardType="number-pad"
                            placeholderTextColor='#000'
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 12,
                                marginBottom: 8
                            }}
                        />
                        <TextInput onChangeText={e => setImmobile({ ...immobile, restrooms: e })}
                            placeholder="Banheiros"
                            keyboardType="number-pad"
                            placeholderTextColor='#000'
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 12,
                                marginBottom: 8
                            }}
                        />
                        <TextInput onChangeText={e => setImmobile({ ...immobile, garages: e })}
                            placeholder="Garagens"
                            keyboardType="number-pad"
                            placeholderTextColor='#000'
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 12,
                                marginBottom: 8
                            }}
                        />
                        <TextInput onChangeText={e => setImmobile({ ...immobile, size: e })}
                            placeholder="Tamanho"
                            keyboardType="number-pad"
                            placeholderTextColor='#000'
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                paddingHorizontal: 12,
                                marginBottom: 8
                            }}
                        />
                    </View>
                    <DropDownPicker style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        borderRadius: 10,
                        paddingHorizontal: 15,
                        marginBottom: 8,
                        borderWidth: 0
                    }}
                        placeholder='Selecione as comodidades'
                        searchPlaceholder="Pesquisar..."
                        open={amenitiesOpen}
                        onOpen={Keyboard.dismiss}
                        setOpen={setAmenitiesOpen}
                        value={amenities}
                        setValue={setAmenities}
                        items={amenitiesItems}
                        setItems={setAmenitiesItems}
                        multiple={true}
                        searchable={true}
                        mode="BADGE"
                        badgeDotColors='#197B5C'
                    />
                    <TextInput placeholder="Fotos"
                        placeholderTextColor='#000'
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            marginBottom: 8
                        }}
                    />
                    <Text style={{
                        color: responseMessage.success ? '#197B5C' : 'red',
                        textAlign: 'center',
                        marginBottom: 5
                    }}>{responseMessage.msg}</Text>
                    <TouchableOpacity onPress={Register}
                        style={{
                            width: '100%',
                            backgroundColor: '#197B5C',
                            padding: 15,
                            borderRadius: 10,
                            alignItems: 'center',
                            marginBottom: 20
                        }}>
                        <Text style={{
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 20,
                            color: '#fff'
                        }}>Enviar</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}

export default ImmobileRegister;