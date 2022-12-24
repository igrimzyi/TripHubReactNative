import React from 'react';
import { View, Text,  StyleSheet, Image } from 'react-native';
import MapView from "react-native-maps";




const styles = StyleSheet.create({
    container:{
        flex:10,
        backgroundColor:'white',
        height:'100%',
    },
    mapBody:{
        // flex:2,
        justifyContent:'space-evenly',
        width:'100%',
        height:'60%',
        
    },
    photo:{
        width:150,
        height:150,
        borderRadius: 100,
        borderColor:"white",
        borderWidth: 6,
    

    },
    photoBody:{
        position: 'relative',
        height  : '100%',
        width: '100%',
        bottom: 80,
        alignItems: 'center',
    },
    mainTitle:{
        fontSize: 25,
        fontWeight: 'bold', 
    }, 
    topContent:{
        height:'30%'
    }
});

const Location = ({navigation}: {navigation: any}) => {


    return(
        <View style={styles.container}>

            <View style={styles.topContent}>
                <MapView
                    initialRegion={{
                        latitude: 34.073620,
                        longitude: -118.400352,
                        latitudeDelta: 0.0592,
                        longitudeDelta: 0.00421,
                        }}
                        style={styles.mapBody}
                
                />

                <View style={styles.photoBody}>
                    <Image style={styles.photo}  source={require('../assets/bar.png')}/>
                    <Text style={styles.mainTitle}>Rocker Pub</Text>
                </View>

            </View>

            <View style={{height:'80%'}}>
                <Text>About</Text>


            </View>




        </View>


    )
}

export default Location;