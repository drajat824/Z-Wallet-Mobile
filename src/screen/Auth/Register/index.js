import React from 'react';
import {ScrollView, View, TextInput} from 'react-native';
import {Button, Text, Card} from 'react-native-paper';
import {AuthRegister} from '../../../redux/actions/Auth';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

const Register = (props) => {
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [hidePassword, setHidePassword] = React.useState(true);

  const dispatch = useDispatch();

  const saveAsync = async () => {
    try {
      await AsyncStorage.setItem('emailRegsiter', email);
    } catch (e) {
      return false;
    }
  };

  console.log(email);

  async function onSubmit() {
    await saveAsync();

    dispatch(
      AuthRegister(
        {
          name: name,
          email: email,
          password: password,
        },
        props.navigation,
      ),
    );
  }

  const {registerError, loading} = useSelector((s) => s.Auth);
  console.log(registerError);

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
              <View style={{marginBottom: 30}}>
                <Icon
                  style={{position: 'absolute', left: 2, top: 14}}
                  size={20}
                  color={registerError ? 'red' : name ? 'blue' : '#A9A9A9'}
                  name="user"
                />
                <TextInput
                  style={{backgroundColor: 'transparent', marginLeft: 30}}
                  placeholder="Username"
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
                <View
                  style={{
                    borderBottomColor: !registerError
                      ? !name
                        ? '#DADADA'
                        : 'blue'
                      : 'red',
                    borderBottomWidth: 2,
                  }}
                />
              </View>

              <View style={{marginBottom: 30}}>
                <Icon
                  style={{position: 'absolute', left: 2, top: 14}}
                  size={20}
                  color={registerError ? 'red' : email ? 'blue' : '#A9A9A9'}
                  name="envelope-o"
                />
                <TextInput
                  style={{backgroundColor: 'transparent', marginLeft: 30}}
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  underlineColorAndroid="#fff"
                />
                <View
                  style={{
                    borderBottomColor: !registerError
                      ? !email
                        ? '#DADADA'
                        : 'blue'
                      : 'red',
                    borderBottomWidth: 2,
                  }}
                />
              </View>

              <View>
                <Icon
                  style={{position: 'absolute', left: 5, top: 14}}
                  size={25}
                  color={registerError ? 'red' : password ? 'blue' : '#A9A9A9'}
                  name="lock"
                />
                <TextInput
                  style={{backgroundColor: 'transparent', marginLeft: 30}}
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
                <View
                  style={{
                    borderBottomColor: !registerError
                      ? !password
                        ? '#DADADA'
                        : 'blue'
                      : 'red',
                    borderBottomWidth: 2,
                  }}
                />
              </View>

              {registerError ? (
                <Text
                  style={{color: 'red', textAlign: 'center', marginTop: 30}}>
                  Register Invalid
                </Text>
              ) : (
                <View />
              )}
            </View>

            <View>
              <Button
                style={{
                  backgroundColor:
                    password && email && name ? '#6379F4' : '#DADADA',
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
                  onPress={() => props.navigation.push('Login')}>
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
