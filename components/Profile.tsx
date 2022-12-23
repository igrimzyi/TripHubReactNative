import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView from "react-native-maps";
import Svg, { Path } from "react-native-svg";

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
        marginBottom:80,
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
    },
    footer:{
        // flex:,   l
        // height: 100,
        width: '100%',
        // flex:1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection:'row',
        borderTopColor:'black',
        borderTopWidth:.2,
        padding:10,
        position: 'absolute',
        bottom: 34,
    },
    badges:{
      
    }


})

const Profile = ({navigation}: {navigation: any}) => {
    

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

            

            <View style={styles.badges}>
                <Text>Badges:</Text>
            </View>


            <View style={styles.footer}>

            {/* <Text style={styles.headerText}>WELCOME BACK, ISAIAH!</Text> */}

            <Svg onPress={() => navigation.navigate('Home')}   height={50} viewBox="0 0 24 24" width={50} >
                <Path fill='black' d="M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3  c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768  C18.184,8.34,12,3,12,3z"/>
            </Svg>

            <Svg height={32}  viewBox="0 0 32 32" width={32} >
            <Path fill='black' d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></Svg>
                
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
                
                    <Svg  width={50} height={50} viewBox="0 0 128 128" fill="none">
                            <Path d="M30 49C30 67.7 45.3 83 64 83C82.7 83 98 67.7 98 49C98 30.3 82.7 15 64 15C45.3 15 30 30.3 30 49ZM90 49C90 63.3 78.3 75 64 75C49.7 75 38 63.3 38 49C38 34.7 49.7 23 64 23C78.3 23 90 34.7 90 49Z" fill="black"/>
                            <Path d="M24.4 119.4C35 108.8 49 103 64 103C79 103 92.9999 108.8 103.6 119.4L109.3 113.7C97.2 101.7 81.1 95 64 95C46.9 95 30.8 101.7 18.7 113.7L24.4 119.4Z" fill="black"/>
                    </Svg>
               
            </TouchableOpacity>


            </View>
        </View>
    )
}

export default Profile;


