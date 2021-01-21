import React from 'react'
import { View, Text, FlatList } from 'react-native'


import ServiceItems from '../components/ServiceItems'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'

const services = [
    {
        id: 1,
        title: 'Computer Training',
        description: 'We train you how to program and use computer, HTML, CSS, JavaScript, PHP/MySQL',
        image: require('../assets/training1.png')
    },
    {
        id: 2,
        title: 'Software Development',
        description: 'Mobile App, Desktop Application, Payroll, School Management etc.',
        image: require('../assets/softwaredev.png')
    },
    {
        id: 3,
        title: 'Mobile App Development',
        description: 'Android App, React Native, .',
        image: require('../assets/DesktoMobile.png')
    }
]

export default function Services() {
    return (
            <Screen>
                <FlatList  
                    data={services}
                    keyExtractor={service => service.id.toString()}
                    renderItem={({item}) => (
                        <ServiceItems 
                            title={item.title}
                            subTitle={item.description}
                            image={item.image}
                            onPress={() => console.log("Service Selected" , item)}
                        />)
                }
                ItemSeparatorComponent={ListItemSeparator}
                />
            </Screen>

        
    )
}
