import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Button, TextInput, Text, Card} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {PatchProfile} from './../../../../redux/actions/Users';
import {ToastAndroid} from 'react-native';

const ChangePin = ({navigation}) => {
  const [pin, setPin] = React.useState('');
  const [pin2, setPin2] = React.useState('');
  const [pin3, setPin3] = React.useState('');
  const [pin4, setPin4] = React.useState('');
  const [pin5, setPin5] = React.useState('');
  const [pin6, setPin6] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const allPin = pin + pin2 + pin3 + pin4 + pin5 + pin6;

  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);

  function onSubmit() {
    if (allPin == null || allPin.length < 5 || allPin == 0) {
      ToastAndroid.show('The pin must be more than 6', ToastAndroid.SHORT);
    } else {
      dispatch(
        PatchProfile({
          token: Auth.data.token,
          pin: allPin,
        }),
      );
      navigation.push('Success');
    }
  }

  return (
    <>
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <Card.Content style={{marginTop: 15}}>
          <View style={{marginTop: 30, marginBottom: 30}}>
            <Text
              style={{
                marginBottom: 20,
                color: 'rgba(58, 61, 66, 0.6)',
              }}>
              Enter your current 6 digits Zwallet PIN below to continue to the
              next steps.
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: '100%',
              justifyContent: 'space-between',
            }}>
            <View>
              <Card style={{width: 50}}>
                <TextInput
                  style={{backgroundColor: 'white'}}
                  value={pin}
                  returnKeyType="next"
                  keyboardType="number-pad"
                  onChangeText={(text) => setPin(text)}
                />
              </Card>
            </View>

            <View>
              <Card style={{width: 50}}>
                <TextInput
                  style={{backgroundColor: 'white'}}
                  value={pin2}
                  returnKeyType="next"
                  keyboardType="number-pad"
                  onChangeText={(text) => setPin2(text)}
                />
              </Card>
            </View>

            <View>
              <Card style={{width: 50}}>
                <TextInput
                  style={{backgroundColor: 'white'}}
                  value={pin3}
                  returnKeyType="next"
                  keyboardType="number-pad"
                  onChangeText={(text) => setPin3(text)}
                />
              </Card>
            </View>

            <View>
              <Card style={{width: 50}}>
                <TextInput
                  style={{backgroundColor: 'white'}}
                  value={pin4}
                  returnKeyType="next"
                  keyboardType="number-pad"
                  onChangeText={(text) => setPin4(text)}
                />
              </Card>
            </View>

            <View>
              <Card style={{width: 50}}>
                <TextInput
                  style={{backgroundColor: 'white'}}
                  value={pin5}
                  returnKeyType="next"
                  keyboardType="number-pad"
                  onChangeText={(text) => setPin5(text)}
                />
              </Card>
            </View>

            <View>
              <Card style={{width: 50}}>
                <TextInput
                  style={{backgroundColor: 'white'}}
                  value={pin6}
                  returnKeyType="send"
                  keyboardType="number-pad"
                  onChangeText={(text) => setPin6(text)}
                />
              </Card>
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
              Change Pin
            </Button>
          </View>
        </Card.Content>
      </ScrollView>
    </>
  );
};

export default ChangePin;
