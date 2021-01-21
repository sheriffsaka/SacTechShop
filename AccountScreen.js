import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ServiceItems from '../components/ServiceItems'

export default function AccountScreen() {
    return (
        <View style={styles.mainContainer}>
            <ServiceItems 
                title="SacTech Computers"
                subTitle="Sactech Computers Services Lagos..."
                image={require("../assets/sheriff1.jpg")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 20

    },
    mainContainer:{
        flex: 1,
        marginTop: 20,
        paddingLeft: 30
    }
})
