import React from 'react';
import {StyleSheet, ScrollView, View, TextInput} from 'react-native';
import {Button, Text, Card} from 'react-native-paper';
import {AuthRegister} from '../../../redux/actions/Auth';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = ({navigation}) => {
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [hidePassword, setHidePassword] = React.useState(true);
  const dispatch = useDispatch();

  function onSubmit() {
    dispatch(
      AuthRegister({
        name: name,
        email: email,
        password: password,
      }),
    );
  }

  const {data} = useSelector((s) => s.Auth);

  if (data.email) {
    navigation.navigate('Pin', {email: data.email});
  } else {
    console.log('error');
  }

  return (
    <>
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <Text
          style={{
            marginTop: 70,
            fontSize: 30,
            marginBottom: 30,
            textAlign: 'center',
            color: '#6379F4',
          }}>
          Zwallet
        </Text>

        <Card
          style={{borderRadius: 50, backgroundColor: 'white', height: '100%'}}>
          <Card.Content style={{marginTop: 15}}>
            <View>
              <Text
                style={{textAlign: 'center', marginBottom: '5%', fontSize: 20}}>
                Sign Up
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginBottom: 20,
                  color: 'rgba(58, 61, 66, 0.6)',
                }}>
                Create your account to access Zwallet.
              </Text>
            </View>

            <View style={{marginBottom: '20%'}}>
              <View>
                <TextInput
                  style={{borderBottomWidth: 1, marginBottom: 30}}
                  placeholder="Username"
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
              </View>

              <View>
                <TextInput
                  style={{borderBottomWidth: 1, marginBottom: 30}}
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  underlineColorAndroid="#fff"
                />
              </View>

              <View>
                <TextInput
                  style={{borderBottomWidth: 1}}
                  placeholder="Password"
                  value={password}
                  returnKeyType="send"
                  onChangeText={(text) => setPassword(text)}
                  underlineColorAndroid="#fff"
                  secureTextEntry={hidePassword}
                />

                <Icon
                  style={{position: 'absolute', right: 2, top: 15}}
                  onPress={() => setHidePassword(!hidePassword)}
                  size={20}
                  color="#A9A9A9"
                  name={hidePassword ? 'eye-slash' : 'eye'}
                />
              </View>
            </View>

            <View>
              <Button
                style={{
                  backgroundColor: '#6379F4',
                  borderRadius: 12,
                  height: 57,
                  width: '95%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => onSubmit()}
                color="#116242"
                mode="contained">
                SignUp
              </Button>
              <Text style={{textAlign: 'center', marginTop: 4}}>
                <Text>Already have an account? Let’s </Text>
                <Text
                  style={{color: 'blue'}}
                  onPress={() => navigation.push('Login')}>
                  {' '}
                  Login
                </Text>
              </Text>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </>
  );
};

export default Register;
