
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Story from './Story';


const data=[
    {
        imageUri:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-355139,resizemode-1,msid-95397129/wealth/invest/this-small-finance-bank-now-offers-up-to-8-interest-rate-for-general-fds-8-26-for-senior-citizens.jpg",
        name:"Rohit",
    },
    {
        imageUri:"https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg",
        name:"Jenny",
    },
    {
        imageUri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlKhXH91P6ZSu7evHzajT_oKva9u5Cd-IihtMiBBaRkUNX_FLJwByTbgQu9xRQXjtzVc&usqp=CAU",
        name:"Cherry",
    },
    {
        imageUri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        name:"Shikha",
    },
    {
        imageUri:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-355139,resizemode-1,msid-95397129/wealth/invest/this-small-finance-bank-now-offers-up-to-8-interest-rate-for-general-fds-8-26-for-senior-citizens.jpg",
        name:"Rohit",
    },
    {
        imageUri:"https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg",
        name:"Jenny",
    },
    {
        imageUri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlKhXH91P6ZSu7evHzajT_oKva9u5Cd-IihtMiBBaRkUNX_FLJwByTbgQu9xRQXjtzVc&usqp=CAU",
        name:"Cherry",
    },
    {
        imageUri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        name:"Shikha",
    }
]

const Stories = () => {
    return (
        <FlatList
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}
      
      
    />
           
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom:15
    }
})

export default Stories;
