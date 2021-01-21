import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

import ErrorMessage from '../components/ErrorMessage'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import Screen from '../components/Screen'


const validationSchema = Yup.object().shape({
    // fullname: Yup.string().required("Fullname is required").label("Fullname"),
    // email: Yup.string().required().email().label("Email"),
    uname: Yup.string().required("Username is required").label("Username"),
    password: Yup.string().required().min(4).label("Password"),
    
});


export default function LoginScreen({ route, ...OtherProps }) {
    var uname = 'sheriff';
    var password = '12345';
    

 const InsertRecord = (props) => {
        // uname = {values.uname}
        // var password = this.password;
        
        if (uname == 0 || password == 0){
            alert("Required field is missing");
        }
        else{
            alert("Fetch the API code here.");
        }
    }
    return (
        
        <View style={styles.container}>
            <Screen>
                
                <Formik 
                    initialValues={{ uname:"", password:""}}
                    onSubmit={values => {handleSubmit}}
                    validationSchema = {validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched  }) =>(    
                        <>        
                    <Text style={styles.heading}>Enter your Login Details Here</Text>
                        
                    <View>
                    
                        <Text>Enter Your Username</Text>
                            <AppTextInput 
                            placeholder="Enter Username"
                            name="uname" 
                            icon="account"
                            onBlur = {() => setFieldTouched("uname")}
                            onChangeText={handleChange("uname")}
                            />
                            <ErrorMessage error={errors.uname} visible={touched.uname} />
                        
                            <Text>Enter Your Password</Text>  
                            <AppTextInput 
                            placeholder="Enter Password"
                            name="password"
                            icon="lock" 
                            onBlur = {() => setFieldTouched("password")}
                            secureTextEntry={true}
                            onChangeText={handleChange("password")} 
                            />
                            <ErrorMessage error={errors.uname} visible={touched.password} />


                        <AppButton title="Login" color="secondary" onPress={handleSubmit, InsertRecord} /> 
                        
                    </View>
                    </>
                    
                 )}
                </Formik>
            
            </Screen>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "dodgerblue"
    },
    heading:{
        fontSize: 18,
        fontWeight: "600",
        fontFamily: "Roboto",
        marginBottom: 40,

    },
    logo:{
        width: 100,
        height: 100,
        borderRadius:  50,
    },
    // txtUsername:{
    //     borderRadius: 5,
    //     backgroundColor: "white",
    //     width: '100%',
    //     height: 30,
    //     marginBottom:20,
    // }

})