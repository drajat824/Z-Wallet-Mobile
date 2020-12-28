import React from 'react';
import Axios from 'axios';
import {ScrollView, View, TextInput} from 'react-native';
import {Button, Text, Card} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {GetProfile, PatchProfile} from './../../../../redux/actions/Users';
import qs from 'qs';
import {ToastAndroid} from 'react-native';
import {API_URL} from '@env';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChangePw = (props) => {
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

  async function onSubmit() {
    if (password2 == null || password == null) {
      ToastAndroid.show('Password cannot be empty', ToastAndroid.SHORT);
    } else if (password != password2) {
      ToastAndroid.show('Password are not the same ', ToastAndroid.SHORT);
    } else {
      await dispatch(
        PatchProfile(
          {
            password: password2,
            token: Auth.data.token,
          },
          props.navigation,
        ),
      );
    }
  }

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

          <View>
            <View style={{marginBottom: 50}}>
              <Icon
                style={{position: 'absolute', left: 5, top: 14}}
                size={25}
                color={!password ? '#DADADA' : 'blue'}
                name="lock"
              />

              <TextInput
                style={{backgroundColor: 'transparent', marginLeft: 30}}
                placeholder="New password"
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
                  borderBottomColor: !password ? '#DADADA' : 'blue',
                  borderBottomWidth: 2,
                }}
              />
            </View>

            <View>
              <Icon
                style={{position: 'absolute', left: 5, top: 14}}
                size={25}
                color={!password2 ? '#DADADA' : 'blue'}
                name="lock"
              />

              <TextInput
                style={{backgroundColor: 'transparent', marginLeft: 30}}
                placeholder="Repeat password"
                value={password2}
                returnKeyType="send"
                onChangeText={(text) => setPassword2(text)}
                underlineColorAndroid="#fff"
                secureTextEntry={hidePassword2}
              />

              <Icon
                style={{position: 'absolute', right: 2, top: 15}}
                onPress={() => setHidePassword2(!hidePassword2)}
                size={20}
                color="#A9A9A9"
                name={hidePassword2 ? 'eye-slash' : 'eye'}
              />

              <View
                style={{
                  borderBottomColor: !password2 ? '#DADADA' : 'blue',
                  borderBottomWidth: 2,
                }}
              />
            </View>
          </View>

          <View style={{paddingBottom: 20, paddingTop: 50}}>
            <Button
              style={{
                backgroundColor: password && password2 ? '#6379F4' : '#DADADA',
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
