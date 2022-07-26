
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function TweetDetail({ route }) {

  const [tweetId, setTweetId] = React.useState(null);


  useEffect(() => {
    console.log('TweetDetail');
   
    const { tweetId } = route.params;

    if (tweetId) {
      setTweetId(tweetId);
    }
  }, []);



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi! I'm a Tweet Detail with ID: {tweetId}</Text>
    </View>
  );
}