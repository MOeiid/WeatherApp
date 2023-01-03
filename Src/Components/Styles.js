import react from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: { 
        flex: 1,
        justifyContent: "center"
    },
    TextinputContainer: {
        backgroundColor: "rgba(255,255,255,0.7)",
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        margin: 40, 
        width: '60%',
        justifyContent: 'space-between'

    },
    TextInput: {
        height: 40,
        // width: '60%',
        fontWeight: 'bold'

    },
    temp: {
        textAlign: 'center',
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: "rgba(255,255,255,0.2)",
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 30,
        overflow: 'hidden',
        marginTop: 10,
        textShadowColor: 'rgba(0,0,0,0.75)',
        textShadowOffset: {width: -3, height: 3},
        textShadowRadius: 10,

    },
    LocationContainer: {
        marginVertical: 15
    },
    Location: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.55)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
    },
    WeatherContainer: {
        alignItems: 'center',
    },
    weather: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white',
        shadowColor: '#000000',
        textShadowOffset: {width: -1, height: 3},
        shadowOpacity: 0.7,
        marginTop: 10,
    }

})



export default styles;