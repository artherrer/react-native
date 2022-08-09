import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import {
  TextInput,
} from 'react-native-gesture-handler';

import elements from '../../assets/js/elements';
import Comment from '../../components/comment';
import Post from '../../components/post';

export default function TweetDetail({route}) {
  const [comments, setComments] = React.useState([]);
  const element = elements.find(element => element.id === route.params.id);

  const getRandomNmber = () => {
    return Math.floor(Math.random() * (8 - 0 + 1)) + 0;
  };

  useEffect(() => {
    const comments = [];
    for (let i = 0; i < getRandomNmber(); i++) {
      comments.push({
        id: i,
        user: elements[i].user,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      });
    }

    setComments(comments);
  }, []);

  const renderHeader = () => {
    return <Post {...element} />;
  };

  const renderComment = item => {
    return <Comment {...item} />;
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'}>
      <FlatList
        style={{flex: 1}}
        data={comments}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderComment(item)}
        ListHeaderComponent={renderHeader}
      />

      <View
        style={{
          height: 50,
          backgroundColor: '#FFF',
          color: 'red',
          borderTopWidth: 1,
          borderColor: '#DDD',
        }}>
        <TextInput
          style={{height: 50, padding: 10, textDecorationColor: 'red'}}
          placeholderTextColor="#BBB"
          placeholder="Write a comment..."
        />
      </View>
    </KeyboardAvoidingView>
  );
}
