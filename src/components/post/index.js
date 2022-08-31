
import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import { HStack, Avatar, Box } from 'native-base';

export default function Post(post) {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('TweetDetail', { id: post.id });
  }

  const getRamdomBoolean = () => {
    return Math.random() >= 0.5;
  }

  return (
      <TouchableOpacity onPress={() => handlePress()} style={{backgroundColor: 'white',  flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#DDD'}}>
        <Avatar source={{uri: post.user.avatar}} height={60} width={60} />
        <Box mx={3} width={285}>
          <HStack>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{post.user.name}</Text>
            {post.user.id && <MaterialIcons name="verified" size={16} color="blue" style={{marginLeft: 3}}/>}
            <Text style={{fontSize: 16, color: 'gray', marginLeft: 3}}>{post.user.username}</Text>
          </HStack>
          <Text style={{fontSize: 14, marginBottom: 5}}>{post.text}</Text>
          <Image source={{uri: post.image}}  style={{width: '100%', height: 150}}/>
          <HStack justifyContent={'space-around'} mt={3}>
            <HStack>
              <EvilIcons name="retweet" size={24}  style={{marginLeft: 3}} color={getRamdomBoolean() ? 'green' : null}/>
              <Text style={{fontSize: 14, marginLeft: 3}}>{post.sharesCount}</Text>
            </HStack>
            <HStack>
              <EvilIcons name="comment" size={24}  style={{marginLeft: 3}} color={getRamdomBoolean() ? 'green' : null}/>
              <Text style={{fontSize: 14, marginLeft: 3}}>{post.commentsCount}</Text>
            </HStack>
            <HStack>
              <EvilIcons name="heart" size={24}  style={{marginLeft: 3}} color={getRamdomBoolean() ? 'red' : null}/>
              <Text style={{fontSize: 14, marginLeft: 3}}>{post.likesCount}</Text>
            </HStack>
          </HStack>
        </Box>
      </TouchableOpacity>
  );
}