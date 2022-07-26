
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

export default function Home({ navigation }) {

  const handlePress = (tweetId) => {
    navigation.navigate('TweetDetail', { tweetId });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title='Go to Tweet Detail' onPress={() => handlePress(4)}/>
    </View>
  );
}