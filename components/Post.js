
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Post = ({post}) => {

    
    return (
        <View>
            <Header imageUri={post.user.imageUri} name={post.user.name} />
            <Body imageUri={post.imageUri}/>
            <Footer 
                likesCount={post.likesCount}
                caption={post.caption}
                postedAt={post.postedAt}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Post;
