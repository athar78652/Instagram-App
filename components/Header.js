
import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import ProfilePicture from './ProfilePicture';
import Icon from 'react-native-vector-icons/Entypo';

const Header = ({imageUri,name}) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <ProfilePicture uri={imageUri} size={40}/>
                <Text style={styles.name}> {name} </Text>
            </View>
            
            <View style={styles.right}>
                <Text><Icon name="dots-three-vertical" size={16}  /></Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
    },
    left:{
        flexDirection:'row'
    },
    right:{
        marginRight:15
    },
    name:{
        alignSelf:"center",
        fontWeight:"bold",
        color:"#3c3c3c"
    }
})

export default Header;
