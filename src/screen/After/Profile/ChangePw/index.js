import React from 'react';
import Axios from 'axios';
import {ScrollView, View} from 'react-native';
import {Button, TextInput, Text, Card} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {GetProfile, PatchProfile} from './../../../../redux/actions/Users';
import qs from 'qs';
import {ToastAndroid} from 'react-native';
import {API_URL} from '@env';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChangePw = ({navigation}) => {
  const [password, setPassword] = React.useState(null);
  const [password2, setPassword2] = React.useState(null);
  const [password3, setPassword3] = React.useState(null);
  const [hidePassword, setHidePassword] = React.useState(true);
  const [hidePassword2, setHidePassword2] = React.useState(true);
  const [hidePassword3, setHidePassword3] = React.useState(true);

  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const {myData, loading} = useSelector((s) => s.Users);

  React.useEffect(() => {
    dispatch(
      GetProfile({
        token: Auth.data.token,
      }),
    );
  }, []);

  const onSubmit = () => {
    if (password3 == null) {
      ToastAndroid.show('Password tidak boleh kosong', ToastAndroid.SHORT);
    } else {
      dispatch(
        PatchProfile({
          password: password3,
          token: Auth.data.token,
        }),
      );
    }
  };

  return (
    <>
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <Card.Content style={{marginTop: 15}}>
          <View>
            <Text
              style={{
                marginBottom: 20,
                color: 'rgba(58, 61, 66, 0.6)',
              }}>
              You must enter your current password and then type your new
              password twice.
            </Text>
          </View>

          <View style={{marginBottom: '68%'}}>
            <View style={{marginBottom: 30}}>
              <TextInput
                style={{backgroundColor: '#fafcff'}}
                label="Current Password"
                value={password}
                returnKeyType="send"
                onChangeText={(text) => setPassword(text)}
                underlineColorAndroid="#fff"
                secureTextEntry={hidePassword}
              />

              <Icon
                style={{position: 'absolute', right: 0, top: 7}}
                onPress={() => setHidePassword(!hidePassword)}
                color="#A9A9A9"
                icon={hidePassword ? 'eye-outline' : 'eye-off-outline'}
              />

              <Text
                onPress={() => navigation.push('ForgotEmail')}
                style={{position: 'absolute', right: 0, top: 70}}></Text>
            </View>

            <View style={{marginBottom: 30}}>
              <TextInput
                style={{backgroundColor: '#fafcff'}}
                label="New Password"
                value={password2}
                returnKeyType="send"
                onChangeText={(text) => setPassword2(text)}
                underlineColorAndroid="#fff"
                secureTextEntry={hidePassword2}
              />

              <Icon
                style={{position: 'absolute', right: 0, top: 7}}
                onPress={() => setHidePassword2(!hidePassword2)}
                color="#A9A9A9"
                icon={hidePassword2 ? 'eye-outline' : 'eye-off-outline'}
              />

              <Text
                onPress={() => navigation.push('ForgotEmail')}
                style={{position: 'absolute', right: 0, top: 70}}></Text>
            </View>

            <View>
              <TextInput
                style={{backgroundColor: '#fafcff'}}
                label="Confirm New Password"
                value={password3}
                returnKeyType="send"
                onChangeText={(text) => setPassword3(text)}
                underlineColorAndroid="#fff"
                secureTextEntry={hidePassword3}
              />

              <Icon
                style={{position: 'absolute', right: 0, top: 7}}
                onPress={() => setHidePassword3(!hidePassword3)}
                color="#A9A9A9"
                icon={hidePassword3 ? 'eye-outline' : 'eye-off-outline'}
              />

              <Text
                onPress={() => navigation.push('ForgotEmail')}
                style={{position: 'absolute', right: 0, top: 70}}></Text>
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
              Change Password
            </Button>
          </View>
        </Card.Content>
      </ScrollView>
    </>
  );
};

export default ChangePw;
