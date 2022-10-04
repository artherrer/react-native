import React from 'react';
import auth from '@react-native-firebase/auth';
import {Input, Text, Box, VStack, Button} from 'native-base';
import styles from './styles';

export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(null);
  /**
   * Go to signup screen
   */
  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  /**
   * Handle login
   */
  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          setErrorMessage('That email address is invalid!');
        }
        if (error.code === 'auth/user-not-found') {
          setErrorMessage('User not found');
        }
        if (error.code === 'auth/wrong-password') {
          setErrorMessage('Wrong password');
        }
      });
  };

  return (
    <Box bgColor={'blue.500'} flex={1} safeAreaTop>
      <VStack p={10} space={4}>
        <Text
          textAlign={'center'}
          fontSize={26}
          color={'white'}
          fontWeight={'bold'}>
          Login
        </Text>
        {errorMessage && (
          <Text color={'red.500'} textAlign={'center'}>
            {errorMessage}
          </Text>
        )}
        <Box>
          <Text color={'white'}>Email</Text>
          <Input
            variant="filled"
            placeholder="Email"
            bgColor={'gray.200'}
            value={email}
            keyboardType={'email-address'}
            textContentType={'emailAddress'}
            onChangeText={text => setEmail(text)}
          />
        </Box>
        <Box>
          <Text color={'white'}>Password</Text>
          <Input
            variant="filled"
            placeholder="Password"
            type={'password'}
            bgColor={'gray.200'}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </Box>
        <Button
          variant={'solid'}
          style={styles.loginButton}
          disabled={!email && !password}
          onPress={handleLogin}>
          <Text color={'blue.500'} fontWeight={'bold'}>
            Login
          </Text>
        </Button>
        <Button
          variant={'link'}
          style={styles.signupButton}
          onPress={goToSignup}>
          <Text color={'white'} fontWeight={'bold'}>
            Create account
          </Text>
        </Button>
      </VStack>
    </Box>
  );
}
