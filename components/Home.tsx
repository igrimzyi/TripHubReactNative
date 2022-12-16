import React, {useEffect,useState} from "react";
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from "react-native-svg";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import friendsList from './friends.json'; 


const Home = ({navigation}: {navigation: any}) => {

        const [friends, setFriends] = useState(friendsList?.friends); 


        useEffect(() => {

            
            

        }, []);


        return (
            <SafeAreaView style={styles.container} >

                <View style={styles.header}>

                    <Text style={styles.headerText}>WELCOME BACK, ISAIAH!</Text>
                        
                    <Svg onPress={() => navigation.navigate('Profile')} style={styles.profileIcon} width={60} height={60} viewBox="0 0 128 128" fill="none">
                            <Path d="M30 49C30 67.7 45.3 83 64 83C82.7 83 98 67.7 98 49C98 30.3 82.7 15 64 15C45.3 15 30 30.3 30 49ZM90 49C90 63.3 78.3 75 64 75C49.7 75 38 63.3 38 49C38 34.7 49.7 23 64 23C78.3 23 90 34.7 90 49Z" fill="black"/>
                            <Path d="M24.4 119.4C35 108.8 49 103 64 103C79 103 92.9999 108.8 103.6 119.4L109.3 113.7C97.2 101.7 81.1 95 64 95C46.9 95 30.8 101.7 18.7 113.7L24.4 119.4Z" fill="black"/>
                    </Svg>

                </View>

                <View style={styles.mapBody}>  
                    <Text style={styles.mapText}>Take a look around your area!</Text>
                    <MapView
                        scrollEnabled={false}
                        zoomEnabled={false}
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                          }}
                    />
                </View>

                <View style={styles.socialTab}>
                    <Text>See Where Your friends Have been!</Text>

                    <View>
                        
                        {
                            friends?.map((friend: any, key) => {
                                return (
                                    <View style={styles.friendBar} key={key}>
                                        <Text>{friend.name}</Text>
                                        <Text>{friend.recentLocation}</Text>
                                    </View>
                                )
                            })
                        }    

                    </View>
                </View>
                
            </SafeAreaView>
        );
};

const styles = StyleSheet.create({
    profileIcon:{
        width: 60,
    },
    headerText:{
        textAlign: 'center',
        fontSize:25,
        width:'70%'
    },
    container:{
        flex:1,
        height: '100%',
        alignItems: 'center',
        backgroundColor:'white'
        // justifyContent: 'center',

    },
    header:{
        // flex:,   l
        // height: 100,
        width: '100%',
        // flex:1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection:'row',
    },
    mapBody:{
        flex:1,
        justifyContent:'space-evenly',
        height: '25%',
        width: '90%',
    }
    ,
    map:{
        width: '100%',
        height: '60%',
    }, 
    socialTab:{
        flex:1,
        width: '90%',
        display:'flex',
        alignItems:'stretch',
    }, 
    mapText:{
        textAlign:"center", 
        fontSize:25
    },
    friendBar:{
        backgroundColor:'white',
        padding:10,
        maxWidth:'90%',
        width:'90%',
        alignSelf:'center',
    }
  });


export default Home;