
import React, { useEffect, useState } from 'react';
import {View, StyleSheet,Text, TouchableWithoutFeedback} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const Footer = ({likesCount,caption,postedAt}) => {

    console.log(typeof(likesCount));

const [isLiked,setIsLike]=useState(false);
const [likes,setLikesCount]=useState();

const onLikePressed = ()=>{
    
    const amount =isLiked ? -1 : 1;
    
    setLikesCount(likes + amount);
    setIsLike(!isLiked);
    
}

useEffect(()=>{
    setLikesCount(likesCount)
},[])

    return (
        <View style={styles.container}>
        <View style={styles.iconsContainer}>

        <View style={styles.leftIcons}>
        <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? 
                <ADIcon name='heart' size={23} color={'red'}/>
                :<ADIcon name='hearto' size={23} color={'#545454'}/>}
        </TouchableWithoutFeedback>
            
            <FontistoIcon name='comment' size={22} color={'#545454'}/>
            <Ionicons name='paper-plane-outline' size={25} color={'#545454'}/>
            
        </View>
        <FontAwesome name='bookmark-o' size={25} color={'#545454'}/>
        </View>


            <Text style={styles.likes}>{likes} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:5
    },
    likes:{
        fontWeight:"bold",
        margin:3
    },
    caption:{
        margin:3
    },
    postedAt:{
        color:"#8c8c8c",
        margin:3 
    },
    leftIcons:{
        flexDirection:'row',
        width:110,
        justifyContent:'space-between'

    },
    iconsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5
    }
})

export default Footer;
