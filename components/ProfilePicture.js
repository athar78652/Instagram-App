
import React from 'react';
import {View, StyleSheet,Image} from 'react-native';

const ProfilePicture = ({uri,size = 70}) => {
    return (
        <View style={[styles.container, {width:size+6, height:size+6}]}>
            <Image 
            style={[styles.image, {width:size, height:size}]}
            source={{ uri }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        
        
        margin:10,
        borderRadius:3,
        borderWidth:1,
        borderColor:"white"
    },
    image:{
        
        borderRadius:40,
        borderWidth:2,
        borderColor:"red"
    }
})

export default ProfilePicture;
