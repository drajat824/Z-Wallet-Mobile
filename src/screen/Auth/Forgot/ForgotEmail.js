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

// const style = StyleSheet.create({

//   bg: {
//     backgroundColor: 'red'
//   }

// })

const ForgotEmail = ({navigation}) => {
  const [email, setEmail] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  const Auth = useSelector((s) => s.Auth);

  const onSubmit = () => {
    navigation.push('ForgotPassword');
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

            <View style={{marginBottom: '70%'}}>
              <TextInput
                style={{backgroundColor: 'white', marginBottom: 30}}
                label="Email"
                value={email}
                returnKeyType="next"
                onChangeText={(text) => setEmail(text)}
                underlineColorAndroid="#fff"
              />
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

export default ForgotEmail;
