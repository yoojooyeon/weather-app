import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Clouds: {
        iconName: "cloud-outline",
        gradient: ["#283048", "#859398"],
        title: "Clouds",
        subtitle: "Ugh, it's cloudy today"
    },
    Thunderstorm: {
        iconName: "thunderstorm-outline",
        gradient: ["#c31432", "#240b36"],
        title: "Thunderstorm",
        subtitle: "Watch out, don't go outside!"
    }, 
    Drizzle: {
        iconName: "rainy-outline",
        gradient: ["#2193b0", "#6dd5ed"],
        title: "Drizzle",
        subtitle: "It's not raining, but still drizzling"
    }, 
    Rain: {
        iconName: "rainy-outline",
        gradient: ["#667db6", "#0082c8", "#0082c8", "#667db6"],
        title: "Rainy",
        subtitle: "It's raining men! Hallelujah!"
    }, 
    Snow: {
        iconName: "snow",
        gradient: ["#C9D6FF", "#E2E2E2"],
        title: "Snow",
        subtitle: "Do you want to build a snowman? YES! "
    },
    Atmosphere: {
        iconName: "cloud-circle-outline",
        gradient: ["#00416A", "#E4E5E6"],
        title: "How is it?",
        subtitle: "Is it clear outside?"
    },
    Clear: {
        iconName: "sunny-outline",
        gradient: ["#FDC830", "#F37335"],
        title: "Sunny",
        subtitle: "Get out and get some sunshine!"
    },
    Haze: {
        iconName: "cloud-circle",
        gradient: ["#aa4b6b", "#6b6b83", "#3b8d99"],
        title: "Haze",
        subtitle: "Don't go outside!"
    },
    Mist: {
        iconName: "rainy-outline",
        gradient: ["#00416A", "#E4E5E6"],
        title: "Mist",
        subtitle: "Misty everywhere"
    },
    Dust: {
        iconName: "cloudy",
        gradient: ["#334d50", "#cbcaa5"],
        title: "Dust",
        subtitle: "Dusty outside!"
    },
    Smoke: {
        iconName: "cloudy",
        gradient: ["#0F2027", "#203A43", "#2C5364"],
        title: "Smoke",
        subtitle: "Don't go outside!"
    },
    Fog: {
        iconName: "cloudy-night",
        gradient: ["#00416A", "#E4E5E6"],
        title: "Fog",
        subtitle: "Careful, it's foggy outside!"
    },
    Sand: {
        iconName: "cloud-circle",
        gradient: ["#659999", "#f4791f"],
        title: "Sand",
        subtitle: "It's sandy!"
    },
    Ash: {
        iconName: "cloud-circle",
        gradient: ["#f12711", "#f5af19"],
        title: "Ash",
        subtitle: "You will get burnt from the sun!"
    },
    Squall: {
        iconName: "snow-outline",
        gradient: ["#373B44", "#4286f4"],
        title: "Squall",
        subtitle: "Watch your head!"
    },
    Tornado: {
        iconName: "flash",
        gradient: ["#1F1C2C", "#928DAB"],
        title: "Tornado",
        subtitle: "Get inside, it's a tornado!"
    }

}


export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <Ionicons 
                    size={96} 
                    name={weatherOptions[condition].iconName} 
                    color="white" 
                />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].name}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
        "Smoke",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left"
    }, 
    textContainer: {
        paddingHorizontal: 40,
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1
    }
});