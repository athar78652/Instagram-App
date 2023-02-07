import React from 'react';
import {View, StyleSheet,Image, Dimensions} from 'react-native';

const Body = ({imageUri}) => {
    return (
        <View>
            <Image source={{uri: imageUri}} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width
        
    }
})

export default Body;