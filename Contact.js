import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import colors from '../config/colors'

export default function Contact() {
    return (
        <>
        <View>
                <View style={styles.center}>
                    <Text style={styles.center}>Feedback / Contact Form</Text>
                </View>
                <View style={styles.container}>
                    <AppTextInput placeholder="Enter your email address" icon="email"    />
                    <AppTextInput placeholder="Enter your Fullname" icon="account"     />
                    <AppTextInput placeholder="Enter you email address" size={50} multiline="true"    />
                    
                </View>
                <View>
                    <AppButton title="Submit Feedback" />
                </View>
            
        
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "dodgerblue",
        alignItems: 'center',
        width: "100%"
            
    },
    center:{
        textAlign: 'center'
    }    
})

