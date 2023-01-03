import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TextInput, ActivityIndicator } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import styles from '../Components/Styles';
import axios from 'axios';
import One from '../../assets/1.jpg';
import Two from '../../assets/2.jpg';
import Three from '../../assets/3.jpg';
import Four from '../../assets/4.jpg';
import Five from '../../assets/5.jpg';
import Six from '../../assets/6.jpg';
import Seven from '../../assets/7.jpg';
import Nine from '../../assets/9.jpg';


const images = [One, Two, Three, Four, Five, Six, Seven, Nine]

const Home = () => {



    const [city, setCity] = useState("")
    const [weather, setWeather] = useState({})
    const [loading, setLoding] = useState (false)
    const [randomImage, setRandomImage] = useState(images[2])


    const getWeather = async () => {
        if (!city.trim()) return
        setLoding (true)
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=89972f96705e6b675ad60c405f401393`)
            
            setWeather(res.data)
            const n = Math.floor(Math.random () *images.length)
            setRandomImage(images[n])
            setLoding (false)




        } catch (error) {
           alert("Check the city name")
           setLoding (false)

        }
    }

  return (
    <ImageBackground source={randomImage} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={{flex: 1,}}>
            <View style={styles.TextinputContainer}>
                <TextInput
                    style={styles.TextInput}
                    value={city}
                    placeholder="write your city"
                    onChangeText={(text) => setCity(text)}
                />
               {loading ? <ActivityIndicator size="small" color="black" /> :<Entypo
                onPress={getWeather}
                name="check" size={24} color="black" />}

            </View>
            {Object.keys(weather).length > 0 ? 
            <>
            <View style={styles.LocationContainer}>
                <Text style={styles.Location}>{weather?.name}, {weather?.sys?.country}</Text>

            </View>
            <View style={styles.WeatherContainer}>
                <Text style={styles.temp}> {Math.round(weather.main.temp)} ْC</Text>
                <Text style={styles.weather}>{weather.weather[0].main}</Text>
            </View>
            </>
            : null}

        </SafeAreaView>

    </ImageBackground>
  )
}


export default Home