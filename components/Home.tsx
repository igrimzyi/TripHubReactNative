import React, {useEffect,useState} from "react";
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
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

                <View style={styles.mapBody}>  
                    <Text style={styles.mapText}>Take a look around your area!</Text>
                    <MapView
                        scrollEnabled={false}
                        zoomEnabled={false}
                        style={styles.map}
                        initialRegion={{
                            latitude: 34.073620,
                            longitude: -118.400352,
                            latitudeDelta: 0.0592,
                            longitudeDelta: 0.00421,
                          }}
                    />
                </View>

                <View style={styles.socialTab}>
                    <Text style={styles.socialText}>See Where Your Friends Have Been!</Text>

                    <View style={styles.friendGroup}>
                        
                        {
                            friends?.map((friend: any, key) => {
                                return (
                                <TouchableOpacity onPress={()=>{navigation.navigate('Location')}} key={key}>
                                    <View style={styles.friendBar}>
                                        <Text style={styles.locType}>
                                        {friend.type}
                                        </Text>
                                        <View style={styles.friendContent}>
                                            <View>
                                                <Text style={styles.friendName}>{friend.name}</Text>
                                                <Text style={styles.locationText}>{friend.recentLocation}</Text>
                                            </View>
                                            <Svg width={35} height={50} viewBox="0 0 96 96" fill="none" >
                                                <Path d="M56.6244 47.9978L26.1544 73.3878C24.9382 74.4094 24.1764 75.8712 24.0358 77.4533C23.8951 79.0354 24.3872 80.6087 25.4042 81.8287C26.4211 83.0488 27.8801 83.8161 29.4616 83.9627C31.0432 84.1093 32.6183 83.6231 33.8422 82.6108L69.8437 52.6094C70.5188 52.0454 71.0618 51.3401 71.4344 50.5433C71.807 49.7464 72.0001 48.8775 72.0001 47.9978C72.0001 47.1182 71.807 46.2493 71.4344 45.4524C71.0618 44.6556 70.5188 43.9503 69.8437 43.3863L33.8422 13.385C32.6189 12.3678 31.0418 11.8778 29.4574 12.0226C27.873 12.1674 26.4109 12.9351 25.3923 14.1572C24.3736 15.3793 23.8817 16.9558 24.0246 18.5404C24.1675 20.1249 24.9335 21.588 26.1544 22.6081L56.6244 47.9978Z" fill="#C4C4C4"/>
                                            </Svg>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                )
                            })
                        }    

                    </View>

                    {/* <Text style={styles.viewMore}>View More</Text> */}

                </View>


                <View style={styles.header}>

                    {/* <Text style={styles.headerText}>WELCOME BACK, ISAIAH!</Text> */}

                    <Svg  height={50} viewBox="0 0 24 24" width={50} >
                        <Path fill='black' d="M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3  c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768  C18.184,8.34,12,3,12,3z"/>
                    </Svg>
                    <Svg height={32}  viewBox="0 0 32 32" width={32} >
                    <Path fill='black' d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></Svg>

                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} > 
                        <Svg onPress={() => navigation.navigate('Profile')} style={styles.profileIcon} width={50} height={50} viewBox="0 0 128 128" fill="none">
                                <Path d="M30 49C30 67.7 45.3 83 64 83C82.7 83 98 67.7 98 49C98 30.3 82.7 15 64 15C45.3 15 30 30.3 30 49ZM90 49C90 63.3 78.3 75 64 75C49.7 75 38 63.3 38 49C38 34.7 49.7 23 64 23C78.3 23 90 34.7 90 49Z" fill="black"/>
                                <Path d="M24.4 119.4C35 108.8 49 103 64 103C79 103 92.9999 108.8 103.6 119.4L109.3 113.7C97.2 101.7 81.1 95 64 95C46.9 95 30.8 101.7 18.7 113.7L24.4 119.4Z" fill="black"/>
                        </Svg>
                    </TouchableOpacity>
                    

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
        borderTopColor:'black',
        borderTopWidth:.2,
        padding:10,
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
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between',
    },
    friendName:{
        fontSize:20,
        fontWeight:'700',
    },
    locationText:{
        color:'#C4C4C4',
        fontSize:15,
    },
    friendContent:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
        borderBottomColor:'#C4C4C4',
        borderBottomWidth:.2,
        paddingBottom:10,
        // backgroundColor:'red'
    },
    locType:{
        fontSize:40,
    },
    friendGroup:{
        marginTop:20,
    },
    socialText:{
        textAlign:'center',
        fontSize:25

    },
    viewMore:{
        textAlign:'center',
        fontSize:20,
        marginTop:15,
        color:'#C4C4C4'
    }
  });


export default Home;