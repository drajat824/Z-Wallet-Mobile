import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import {Button, Text, Card} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {AuthRegisterPin} from '../../../redux/actions/Auth';
import {ToastAndroid} from 'react-native';

const Success = ({route, navigation}) => {
  const success = require('./../../../../images/success.png');

  return (
    <>
      <View style={{backgroundColor: '#fafcff', height: '100%'}}>
        <Text
          style={{
            marginTop: 100,
            fontSize: 30,
            marginBottom: 100,
            textAlign: 'center',
            color: '#6379F4',
          }}>
          Zwallet
        </Text>

        <Card
          style={{borderTopEndRadius: 50,borderTopStartRadius: 50 ,backgroundColor: 'white', bottom: 0, position: 'absolute', width: '100%'}}>
          <Card.Content style={{marginTop: 15}}>
            <Image
              style={{
                alignSelf: 'center',
                width: 60,
                height: 60,
                resizeMode: 'stretch',
                marginBottom: 30,
              }}
              source={success}
            />

            <View style={{marginBottom: 100}}>
              <Text
                style={{textAlign: 'center', marginBottom: '5%', fontSize: 20}}>
                PIN Successfully Created
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginBottom: 20,
                  color: 'rgba(58, 61, 66, 0.6)',
                }}>
                Your PIN was successfully created and you can now access all the
                features in Zwallet. Login to your new account and start
                exploring!
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
                color="#116242"
                onPress={() => navigation.push('Login')}
                mode="contained">
                Login Now
              </Button>
            </View>
          </Card.Content>
        </Card>
      </View>
    </>
  );
};

export default Success;
