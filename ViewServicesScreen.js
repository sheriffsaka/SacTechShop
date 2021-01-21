import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ServiceItems from '../components/ServiceItems'
import Screen from '../components/Screen'

import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Card from '../components/Card'
import AppButton from '../components/AppButton'

export default function ViewServicesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.topper}>
                <Text style={styles.textus}>What did you want to do?</Text>
                <MaterialCommunityIcons style={styles.textus} name="email" size={70} color="dodgerblue" onPress={() => navigation.navigate('Contact')} />
                <TouchableOpacity style={styles.closeIcon}>Home</TouchableOpacity>
                <TouchableOpacity style={styles.nextIcon}>Next</TouchableOpacity>
            </View>
            {/* <Image
            blurRadius={5}
            style={styles.image}
            resizeMode="contain" source={require('../assets/sactech2.png')} /> */}
            <View style={styles.detailsContainer}>
                <Card 
                    title="Computer Training"
                    subTitle="N20,000 and above..."
                    image={require('../assets/training1.png')}
                />
                <AppButton title="Call to Order" onPress={() => navigation.navigate('Dialler')} />
                <Card 
                    title="Software Development"
                    subTitle="N20,000 and above..."
                    image={require('../assets/softwaredev.png')}
                />
                <Card 
                    title="Remedial and Private Coaching"
                    subTitle="N20,000 and above..."
                    image={require('../assets/neco.jpg')}
                />
                <ServiceItems 
                    image={require("../assets/sheriff1.jpg")}
                    title="SacTech Computers"
                    subTitle="3 Services"
                />
                <AppButton title="Read More on the Services" onPress={() => navigation.navigate('Services')} />
                
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 100,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 10,
        position: "absolute",
        top: 40,
        left: 30,
        textAlign: "center",
        paddingTop: 20
    },
    container:{
        flex: 1,

    },
    detailsContainer:{
        padding: 20,

    },
    nextIcon: {
        width: 100,
        height: 50,
        backgroundColor: colors.secondary,
        borderRadius: 10,
        position: "absolute",
        top: 40,
        right: 30,
        textAlign: "center",
        paddingTop: 20
    },
    image:{
        width: "100%",
        height: 200,

    },
    textus:{
        textAlign: "center",
        alignItems: 'center',
    },
    topper:{
        marginBottom: 10,
    }
})
