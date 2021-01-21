import React, { Component } from 'react'
import { Image, ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import AppButton from '../components/AppButton';
// import LoginScreen from './app/components/Screens/LoginScreen';
// import RegisterScreen from './app/components/Screens/RegisterScreen';



function WelcomeScreen ({ navigation }) {
    return (
        <>
        
        <ImageBackground  
            blurRadius={5}
            style={styles.background}
            source={require('../assets/sactechbackground.jpg')}>;

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/sactech1.png')}/>
                <Text style={styles.tagText}>Showcase Your Products Here</Text>
            </View>
            

            <View>
                <AppButton title="Check Our Services Rendered Here"  onPress={() => navigation.navigate('ViewServicesScreen')} />
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate('LoginScreen')} />
                <AppButton title="Register" color="secondary"  onPress={() => navigation.navigate('RegisterScreen')}/>          
            </View>
            
        </ImageBackground>
        
        
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center"

    },
    buttonsContainer:{
        padding: 20,
        width: "100%",
    },

    logo:{
        width: 100,
        height: 100,
        borderRadius:  50,
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    tagText:{
        fontSize: 25,
        fontWeight: "600",
        // backgroundColor: "dodgerblue",
        textAlign: "center",
        paddingVertical: 10,
        color: "red"

    }


})

export default WelcomeScreen;