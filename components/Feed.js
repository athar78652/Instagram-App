
import React from 'react';
import {StyleSheet,FlatList} from 'react-native';
import Post from './Post';
import Stories from './Stories';

const data=[
  {  
    id:'1',
    user:{
        imageUri:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-355139,resizemode-1,msid-95397129/wealth/invest/this-small-finance-bank-now-offers-up-to-8-interest-rate-for-general-fds-8-26-for-senior-citizens.jpg",
        name:"Rohit",
    },
    imageUri:"https://media.istockphoto.com/id/1341759747/photo/playful-pet-dog-playing-fetch.jpg?b=1&s=170667a&w=0&k=20&c=0PEpw-YuZ_57why1On29MfmHzc_amS55vsGXQ5-ITyI=",
    caption:"# Animal",
    likesCount:2145,
    postedAt:"4 minutes ago"
},
{  
    id:'2',
    user:{
        imageUri:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-355139,resizemode-1,msid-95397129/wealth/invest/this-small-finance-bank-now-offers-up-to-8-interest-rate-for-general-fds-8-26-for-senior-citizens.jpg",
        name:"Rohit",
    },
    imageUri:"http://images2.fanpop.com/images/photos/5900000/Randomness-random-5997130-1280-800.jpg",
    caption:"# Feeling Sad ",
    likesCount:1105,
    postedAt:"9 minutes ago"
},
{  
    id:'3',
    user:{
        imageUri:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-355139,resizemode-1,msid-95397129/wealth/invest/this-small-finance-bank-now-offers-up-to-8-interest-rate-for-general-fds-8-26-for-senior-citizens.jpg",
        name:"Rohit",
    },
    imageUri:"http://images2.fanpop.com/images/photos/4800000/Beauty-of-nature-random-4884718-1280-800.jpg",
    caption:"# Good Morning",
    likesCount:2145,
    postedAt:"2 minutes ago"
},
{  
    id:'4',
    user:{
        imageUri:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-355139,resizemode-1,msid-95397129/wealth/invest/this-small-finance-bank-now-offers-up-to-8-interest-rate-for-general-fds-8-26-for-senior-citizens.jpg",
        name:"Rohit",
    },
    imageUri:"https://meowkitchen.com/wp-content/uploads/2014/02/nature.jpg",
    caption:"# Cute Cat",
    likesCount:2145,
    postedAt:"23 minutes ago"
},
{  
    id:'5',
    user:{
        imageUri:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-355139,resizemode-1,msid-95397129/wealth/invest/this-small-finance-bank-now-offers-up-to-8-interest-rate-for-general-fds-8-26-for-senior-citizens.jpg",
        name:"Rohit",
    },
    imageUri:"https://staticmobly.akamaized.net/p/Qcola-Papel-de-Parede-Random-Nature-8175-796464-2-zoom.jpg",
    caption:"# Hello Everyone",
    likesCount:2145,
    postedAt:"20 minutes ago"
},
{  
    id:'6',
    user:{
        imageUri:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-355139,resizemode-1,msid-95397129/wealth/invest/this-small-finance-bank-now-offers-up-to-8-interest-rate-for-general-fds-8-26-for-senior-citizens.jpg",
        name:"Rohit",
    },
    imageUri:"https://media.istockphoto.com/id/1341759747/photo/playful-pet-dog-playing-fetch.jpg?b=1&s=170667a&w=0&k=20&c=0PEpw-YuZ_57why1On29MfmHzc_amS55vsGXQ5-ITyI=",
    caption:"# Animal",
    likesCount:2145,
    postedAt:"4 minutes ago"
},
{  
    id:'7',
    user:{
        imageUri:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-355139,resizemode-1,msid-95397129/wealth/invest/this-small-finance-bank-now-offers-up-to-8-interest-rate-for-general-fds-8-26-for-senior-citizens.jpg",
        name:"Rohit",
    },
    imageUri:"http://images2.fanpop.com/images/photos/5900000/Randomness-random-5997130-1280-800.jpg",
    caption:"# Feeling Sad ",
    likesCount:2145,
    postedAt:"9 minutes ago"
},
{  
    id:'8',
    user:{
        imageUri:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-355139,resizemode-1,msid-95397129/wealth/invest/this-small-finance-bank-now-offers-up-to-8-interest-rate-for-general-fds-8-26-for-senior-citizens.jpg",
        name:"Rohit",
    },
    imageUri:"http://images2.fanpop.com/images/photos/4800000/Beauty-of-nature-random-4884718-1280-800.jpg",
    caption:"# Good Morning",
    likesCount:2145,
    postedAt:"2 minutes ago"
},
{  
    id:'9',
    user:{
        imageUri:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-355139,resizemode-1,msid-95397129/wealth/invest/this-small-finance-bank-now-offers-up-to-8-interest-rate-for-general-fds-8-26-for-senior-citizens.jpg",
        name:"Rohit",
    },
    imageUri:"https://meowkitchen.com/wp-content/uploads/2014/02/nature.jpg",
    caption:"# Cute Cat",
    likesCount:2145,
    postedAt:"23 minutes ago"
},
{  
    id:'10',
    user:{
        imageUri:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-355139,resizemode-1,msid-95397129/wealth/invest/this-small-finance-bank-now-offers-up-to-8-interest-rate-for-general-fds-8-26-for-senior-citizens.jpg",
        name:"Rohit",
    },
    imageUri:"https://staticmobly.akamaized.net/p/Qcola-Papel-de-Parede-Random-Nature-8175-796464-2-zoom.jpg",
    caption:"# ",
    likesCount:2145,
    postedAt:"20 minutes ago"
}
]

const Feed = () => {
    return (
        
            <FlatList
                data={data}
                renderItem={({item}) => <Post post={item}/> }
                keyExtractor={({id})=>id}
                ListHeaderComponent={Stories}
            />
       
    );
}

const styles = StyleSheet.create({})

export default Feed;


