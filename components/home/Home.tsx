import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from "react-native-svg";

const Home = () => {
        return (
            <View style={styles.container} >

                <View style={styles.header}>

                    <Text style={styles.headerText}>WELCOME BACK, ISAIAH!</Text>

                    <Svg style={styles.profileIcon} width={60} height={60} viewBox="0 0 128 128" fill="none">
                            <Path d="M30 49C30 67.7 45.3 83 64 83C82.7 83 98 67.7 98 49C98 30.3 82.7 15 64 15C45.3 15 30 30.3 30 49ZM90 49C90 63.3 78.3 75 64 75C49.7 75 38 63.3 38 49C38 34.7 49.7 23 64 23C78.3 23 90 34.7 90 49Z" fill="black"/>
                            <Path d="M24.4 119.4C35 108.8 49 103 64 103C79 103 92.9999 108.8 103.6 119.4L109.3 113.7C97.2 101.7 81.1 95 64 95C46.9 95 30.8 101.7 18.7 113.7L24.4 119.4Z" fill="black"/>
                    </Svg>

                </View>
                
            </View>
        );
};

const styles = StyleSheet.create({
    profileIcon:{
   
    },
    headerText:{
        textAlign: 'center',
        fontSize:25,
    },
    container:{
        flex:5,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    header:{

        flex:1,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
    }
  });


export default Home;