import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView from "react-native-maps";

const styles = StyleSheet.create({
    mapBody:{
        flex:1,
        justifyContent:'space-evenly',
        // height: '10%',
        width: '100%',
        
    },
    container:{
        flex:10,
        height: '100%',
        // alignItems: 'center',
        backgroundColor:'white'
        // justifyContent: 'center',

    },
    header:{
        // flex:,
        height:"20%",
        marginBottom:70
    },
    Profile:{
        width:"40%",
        height:"90%",
        position: 'absolute',
        borderRadius: 100,
        borderColor:"white",
        borderWidth: 6,
        bottom: -80,
        left: 130,
    }


})

const Profile = () => {
    

    return (    
        <View style={styles.container}>
            <View style={styles.header} >
                <MapView 
                        scrollEnabled={false}
                        zoomEnabled={false}
                        style={styles.mapBody}
                        initialRegion={{
                                latitude: 34.073620,
                                longitude: -118.400352,
                                latitudeDelta: 0.0592,
                                longitudeDelta: 0.00421,
                        }}
                />
                <Image source={require('../assets/prof.png')} style={styles.Profile} />
            </View>

    
            <Text>Hello</Text>
        </View>
    )
}

export default Profile;


