import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, TextInput, Text, Card} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {AuthLogin} from '../../../redux/actions/Auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import messaging from '@react-native-firebase/messaging';
import {API_URL} from '@env';
import qs from 'qs';
import Axios from 'axios';

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [hidePassword, setHidePassword] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  const Auth = useSelector((s) => s.Auth);

  async function onSubmit() {
    
    await  messaging().getToken()
    .then((token) => {
      
    Axios({
        method: 'PATCH',
        url: `${API_URL}/profile/token`,
        data: qs.stringify({
          device: token,
          email: email,
        })
      })
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          console.log(err);
        });
      })
    
    dispatch(
      AuthLogin({
        email: email,
        password: password,
      }),
    );
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
              <View>
                <TextInput
                  style={{backgroundColor: 'white', marginBottom: 30}}
                  label="Email"
                  value={email}
                  returnKeyType="next"
                  onChangeText={(text) => setEmail(text)}
                  underlineColorAndroid="#fff"
                />
              </View>

              <View style={{marginBottom: '40%'}}>
                <TextInput
                  style={{backgroundColor: 'white'}}
                  label="Password"
                  value={password}
                  returnKeyType="send"
                  onChangeText={(text) => setPassword(text)}
                  underlineColorAndroid="#fff"
                  secureTextEntry={hidePassword}
                />

                <Icon
                  style={{position: 'absolute', right: 2, top: 25}}
                  onPress={() => setHidePassword(!hidePassword)}
                  size={20}
                  color="#A9A9A9"
                  name={hidePassword ? 'eye-slash' : 'eye'}
                />

                <Text
                  onPress={() => navigation.push('ForgotEmail')}
                  style={{position: 'absolute', right: 0, top: 70}}>
                  Forgot Password?
                </Text>
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
                  mode="contained"
                  disabled={loading}
                  loading={loading}>
                  Login
                </Button>

                <Text style={{textAlign: 'center', marginTop: 4}}>
                  <Text>Dont have any account? Let's</Text>
                  <Text
                    style={{color: 'blue'}}
                    onPress={() => navigation.push('Register')}>
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
