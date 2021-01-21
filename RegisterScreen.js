import React, { Component } from 'react'
import { AppRegistry, View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';



import ErrorMessage from '../components/ErrorMessage'
import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import Screen from '../components/Screen'
import { render } from 'react-dom';



const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required").label("Fullname"),
    email: Yup.string().required().email().label("Email"),
    uname: Yup.string().required("Username is required").label("Username"),
    password: Yup.string().required().min(4).label("Password")
});




// export default function RegisterScreen({ route, ...OtherProps }) {
    export default class RegisterScreen extends Component {
        constructor(props){
            super(props);
            this.state = {Fullname:'', Email:'', Username:'', Password:'' };
        }

    InsertRecord = () => {
        // var fullname = 'saka sheriff';
        // var email = 'adetunji@yahoo.com';
        // var uname = 'sheriff12';
        // var password = '123456';

        var Fullname = this.state.Fullname;
        var Email = this.state.Email;
        var Username = this.state.Username;
        var Password = this.state.Password;
        
        if (Fullname == 0 || Email == 0 || Username == 0 || Password == 0){
            alert("Required field is missing");
        }
        else{
            // alert("Fetch the API code here.");
            // var InsertAPIURL = "http://192.168.43.21:80/sactechapi/register.php";
            // var header = {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // };

           var Data = {
                Fullname: Fullname,
                Email: Email,
                Username: Username,
                Password: Password
            };

            fetch('http://localhost:80/sactechapi/register.php',
                {
                    method: "POST",
                    headers:  {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(Data)
                }

            )
            .then((response) => response.json())
            .then((response) =>
            {
                alert(response[0].Message);
                // Alert.alert(Response);
            })
            .catch((error) =>
            {
                alert("Error " + error);
            });
        }
    }
    
   render(){
    return (
        
        <View style={styles.container}>
            <Screen>
                {/* <Image style={styles.logo} source={require('../assets/sactech1.png')}/>
             */}
            
            <Text style={styles.heading}>Enter your Details Here to Register</Text>

            <View>
                <Formik 
                    initialValues={{fullname:"", email:"", uname:"", password:""}}
                    onSubmit={values => {handleSubmit}}
                    validationSchema = {validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched  }) =>(
                        <>
                            <Text>Enter Your Full Name</Text>
                            <AppTextInput 
                            style={styles.txtUsername} 
                            name="Fullname"
                            onBlur = {() => setFieldTouched("fullname")}
                            placeholder="Fullname"
                            textContentType="Text"
                            // onChangeText={handleChange("fullname")}
                            onChangeText={Fullname => this.setState({Fullname})}
                            />
                            {/* <AppText style={{color: 'red'}}>{errors.fullname}</AppText> */}
                            {/* <ErrorMessage error={errors.fullname} visible={touched.fullname} /> */}
                            
                            <Text>Enter Your Email</Text>
                            <AppTextInput 
                            style={styles.txtUsername} 
                            name="Email"
                            onBlur = {() => setFieldTouched("email")}
                            placeholder="Email"
                            textContentType="emailAddress"
                            // onChangeText={handleChange("email")}
                            onChangeText={Email => this.setState({Email})}
                            />
                            {/* <AppText style={{color: 'red'}}>{errors.email}</AppText> */}
                            {/* <ErrorMessage error={errors.email} visible={touched.email} /> */}
            
                            <Text>Enter Your Username</Text>
                            <AppTextInput 
                            style={styles.txtUsername} 
                            name="Username"
                            onBlur = {() => setFieldTouched("uname")}
                            placeholder="Username"
                            textContentType="Text"
                            // onChangeText={handleChange("uname")}
                            onChangeText={Username => this.setState({Username})}
                            />
                            {/* <AppText style={{color: 'red'}}>{errors.uname}</AppText> */}
                            {/* <ErrorMessage error={errors.uname} visible={touched.uname} /> */}
                        
                            <Text>Enter Your Password</Text>  
                            <AppTextInput 
                            style={styles.txtUsername} 
                            name="Password" 
                            onBlur = {() => setFieldTouched("password")}
                            secureTextEntry="true"
                            textContentType="password"
                            placeholder="Password"
                            // onChangeText={handleChange("password")}
                            onChangeText={Password => this.setState({Password})}
                            />
                            {/* <AppText style={{color: 'red'}}>{errors.password}</AppText> */}
                            {/* <ErrorMessage error={errors.password} visible={touched.password} /> */}
                            
                            {/* <AppButton title="Submit" color="secondary"  onPress={handleSubmit, InsertRecord} /> */}
                            <AppButton title="Submit" color="secondary"  onPress={ this.InsertRecord } />
                            </>
                    )}
                

                </Formik>
            </View>
            </Screen>
        </View>
        
    );}
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
    txtUsername:{
        borderRadius: 5,
        backgroundColor: "white",
        width: '100%',
        height: 30,
        marginBottom:20,
    }

})