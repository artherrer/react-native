import React from 'react';
import {Input, Text, Box, VStack, Button, HStack, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator} from 'react-native';
export default function Signup({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  /**
   * Go to login screen
   */
  const goToLoginScreen = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    console.warn(email, password);
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          setErrorMessage('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          setErrorMessage('That email address is invalid!');
        }
      });
  };

  const verifyPassword = () => {
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters');
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return false;
    }
    return password === confirmPassword;
  };

  return (
    <Box bgColor={'blue.500'} justifyContent={'center'} flex={1} safeAreaTop>
      <Button variant={'ghost'} width={120} onPress={goToLoginScreen}>
        <HStack pl={5} alignContent={'center'}>
          <Icon
            as={Ionicons}
            name={'arrow-back-outline'}
            size={'md'}
            color={'white'}
            fontWeight={'bold'}
          />
          <Text color={'white'} fontWeight={'bold'}>
            Login
          </Text>
        </HStack>
      </Button>
      <Box flex={1}>
        <VStack p={10} space={4}>
          <Text
            textAlign={'center'}
            fontSize={26}
            color={'white'}
            fontWeight={'bold'}>
            Signup
          </Text>
          {errorMessage && <Text color={'red.500'}>{errorMessage}</Text>}
          <Box>
            <Text color={'white'}>Email</Text>
            <Input
              variant="filled"
              placeholder="Email"
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
              value={password}
              onChangeText={text => setPassword(text)}
              onBlur={verifyPassword}
            />
          </Box>
          <Box>
            <Text color={'white'}>Repeat Password</Text>
            <Input
              variant="filled"
              placeholder="Password"
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              onBlur={verifyPassword}
            />
          </Box>
          <Button
            variant={'solid'}
            bgColor={'white'}
            mt={5}
            onPress={handleSignup}
            disabled={!verifyPassword || loading}>
            <HStack>
              {loading && <ActivityIndicator />}
              <Text color={'blue.500'} fontWeight={'bold'}>
                Create account
              </Text>
            </HStack>
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
