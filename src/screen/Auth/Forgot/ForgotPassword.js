import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {
  Button,
  TextInput,
  Text,
  Card,
  Content,
  Cover,
} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {AuthLogin} from '../../../redux/actions/Auth';
import Icon from 'react-native-vector-icons/FontAwesome';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [password2, setPassword2] = React.useState(null);
  const [hidePassword, setHidePassword] = React.useState(true);
  const [hidePassword2, setHidePassword2] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  const Auth = useSelector((s) => s.Auth);

  const onSubmit = () => {
    dispatch(
      AuthLogin({
        email: email,
        password: password,
        // history: props.history
      }),
    );
  };

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
                style={{
                  textAlign: 'center',
                  marginBottom: '5%',
                  fontSize: 20,
                }}>
                Reset Password
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginBottom: 20,
                  color: 'rgba(58, 61, 66, 0.6)',
                }}>
                Enter your Zwallet e-mail so we can send you a password reset
                link.
              </Text>
            </View>

            <View style={{marginBottom: '68%'}}>
              <View style={{marginBottom: 30}}>
                <TextInput
                  style={{backgroundColor: 'white'}}
                  label="Create New Password"
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

              <View>
                <TextInput
                  style={{backgroundColor: 'white'}}
                  label="Confirm New Password"
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
                Confirm
              </Button>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </>
  );
};

export default ForgotPassword;
