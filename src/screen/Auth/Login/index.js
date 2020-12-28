import React from 'react';
import {ScrollView, View, TextInput, StatusBar} from 'react-native';
import {Button, Text, Card} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {AuthLogin} from '../../../redux/actions/Auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoadingComponent from './../.././../component/loading';

const Login = (props) => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [hidePassword, setHidePassword] = React.useState(true);

  const {loginError, loading} = useSelector((s) => s.Auth);

  const dispatch = useDispatch();

  function onSubmit() {
    dispatch(
      AuthLogin({
        email: email,
        password: password,
      }),
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
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
                Login
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginBottom: 20,
                  color: 'rgba(58, 61, 66, 0.6)',
                }}>
                Login to your existing account to access all the features in
                Zwallet.
              </Text>
            </View>

            <View>
              <View style={{marginBottom: 30}}>
                <Icon
                  style={{position: 'absolute', left: 2, top: 14}}
                  size={20}
                  color={loginError ? 'red' : email ? 'blue' : '#A9A9A9'}
                  name="envelope-o"
                />

                <TextInput
                  style={{backgroundColor: 'transparent', marginLeft: 30}}
                  value={email}
                  placeholder="Enter your e-mail"
                  returnKeyType="next"
                  onChangeText={(text) => setEmail(text)}
                  underlineColorAndroid="#fff"
                />

                <View
                  style={{
                    borderBottomColor: !loginError
                      ? !email
                        ? '#DADADA'
                        : 'blue'
                      : 'red',
                    borderBottomWidth: 2,
                  }}
                />
              </View>

              <View style={{marginBottom: '30%'}}>
                <Icon
                  style={{position: 'absolute', left: 5, top: 14}}
                  size={25}
                  color={loginError ? 'red' : password ? 'blue' : '#A9A9A9'}
                  name="lock"
                />

                <TextInput
                  style={{backgroundColor: 'transparent', marginLeft: 30}}
                  placeholder="Enter your password"
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
                    borderBottomColor: !loginError
                      ? !password
                        ? '#DADADA'
                        : 'blue'
                      : 'red',
                    borderBottomWidth: 2,
                  }}
                />

                <Text
                  onPress={() => props.navigation.push('ForgotEmail')}
                  style={{
                    textAlign: 'right',
                    marginTop: 10,
                    color: 'rgba(58, 61, 66, 0.6)',
                  }}>
                  Forgot Password?
                </Text>

                {loginError ? (
                  <Text
                    style={{color: 'red', textAlign: 'center', marginTop: 30}}>
                    Email or Password Invalid
                  </Text>
                ) : (
                  <View style={{marginTop: 30}} />
                )}
              </View>

              <View>
                <Button
                  style={{
                    backgroundColor: password && email ? '#6379F4' : '#DADADA',
                    borderRadius: 12,
                    height: 57,
                    width: '95%',
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => onSubmit()}
                  mode="contained">
                  Login
                </Button>

                <Text style={{textAlign: 'center', marginTop: 4}}>
                  <Text>Dont have any account? Let's</Text>
                  <Text
                    style={{color: 'blue'}}
                    onPress={() => props.navigation.push('Register')}>
                    {' '}
                    Register
                  </Text>
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </>
  );
};

export default Login;
