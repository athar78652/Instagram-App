
import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import ProfilePicture from './ProfilePicture';

const Story = ({imageUri,name}) => {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageUri}/>
            <Text style={styles.name}> {name} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:5,
        marginTop:15
    },
    name:{
        textAlign:"center",
    }
})

export default Story;
