import React, { useState, useEffect, ChangeEvent } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Image, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';


interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  id: number;
  nome: string;
}

interface OptionItem
{
  key: string;
  value: string;
  label: string;
}


const Home = () => {
    const [ufs, setUfs] = useState<OptionItem[]>([]);
    const [cities, setCities] = useState<OptionItem[]>([]);
    const navigation = useNavigation();
    
    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');

    
    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufInitials = response.data.map(uf => ({ key: uf.sigla, value: uf.sigla, label: uf.sigla }));
            
            setUfs(ufInitials);
        });
    }, []);

    useEffect(() => {
        // carregar as cidades sempre que a UF mudar
        if(selectedUf === '0') {
            return;
        }

        axios
            .get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
            .then(response => {
                const cityName = response.data.map(city => ({ key: String(city.id), value: city.nome, label: city.nome }));

                setCities(cityName);
        });
    }, [selectedUf]);



    function handleNavigateToPoints() {      
        const uf = selectedUf;
        const city = selectedCity;

        navigation.navigate('Points', {
          uf,
          city,
        });
    }

    function handleSelectUf(uf: string) {
        setSelectedUf(uf);
    }

    function handleSelectCity(city: string) {
        setSelectedCity(city);
    } 

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === 'ios'? 'padding' : undefined}
        >
            <ImageBackground 
                source={require('../../assets/home-background.png')} 
                style={ styles.container }
                imageStyle={{ width: 274, height: 368 }}
            >
                <View style={ styles.main }>
                    <Image source = {require('../../assets/logo.png')} />
                    <View>
                        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
                        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiênte.</Text>
                    </View>
                </View>

                {/* <TextInput 
                    style={styles.input}
                    placeholder="Digite a UF"
                    value={uf}
                    maxLength={2}
                    autoCapitalize="characters"
                    autoCorrect={false}
                    onChangeText={setUf}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Digite a Cidade"
                    value={city}
                    autoCorrect={false}
                    onChangeText={setCity}
                /> */}

                <RNPickerSelect
                    onValueChange={(value) => handleSelectUf(value)}
                    placeholder={{ value: '0', label: "Selecione um Estado"}}
                    
                    items={ufs}
                />
                
                <RNPickerSelect
                    onValueChange={(value) => handleSelectCity(value)}
                    placeholder={{ value: '0', label: "Selecione uma Cidade"}}
                    
                    items={cities}
                />

                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={handleNavigateToPoints}>
                        <View style={styles.buttonIcon}>
                            <Text>
                                <Icon name="arrow-right" color="#FFF" size={24} />
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>
                            Entrar
                        </Text>
                    </RectButton>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });

export default Home;