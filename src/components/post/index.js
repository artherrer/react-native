
import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

export default function Post({ user, post, id }) {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('TweetDetail', { id });
  }

  const getRandomNumber = () => {
    return Math.floor(Math.random() * (20 - 0 + 1)) + 0;
  }

  getRamdomBoolean = () => {
    return Math.random() >= 0.5;
  }

  return (
      <TouchableOpacity onPress={() => handlePress(1)} style={{backgroundColor: 'white',  flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#DDD'}}>
        <Image source={{uri: user.avatar}} style={{width: 60, height: 60, borderRadius: 100}}/>
        <View style={{marginHorizontal: 10, width: 285}}>
          <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{user.name}</Text>
            {id % 2 === 0 && <MaterialIcons name="verified" size={16} color="blue" style={{marginLeft: 3}}/>}
            <Text style={{fontSize: 16, color: 'gray', marginLeft: 3}}>@{user.username}</Text>
          </View>
          <Text style={{fontSize: 14, marginBottom: 5}}>{post.description}</Text>
          <Image source={{uri: post.image}}  style={{width: '100%', height: 150}}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>
            <View style={{flexDirection: 'row'}}>
              <EvilIcons name="retweet" size={24}  style={{marginLeft: 3}} color={getRamdomBoolean() ? 'green' : null}/>
              <Text style={{fontSize: 14, marginLeft: 3}}>{getRandomNumber()}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <EvilIcons name="comment" size={24}  style={{marginLeft: 3}} color={getRamdomBoolean() ? 'green' : null}/>
              <Text style={{fontSize: 14, marginLeft: 3}}>{getRandomNumber()}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <EvilIcons name="heart" size={24}  style={{marginLeft: 3}} color={getRamdomBoolean() ? 'red' : null}/>
              <Text style={{fontSize: 14, marginLeft: 3}}>{getRandomNumber()}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
  );
}