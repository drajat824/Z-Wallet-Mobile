import React from 'react';
import {ScrollView, View, TextInput, StatusBar} from 'react-native';
import {Button, Text, Card} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {PatchProfile} from './../../../../redux/actions/Users';
import {ToastAndroid} from 'react-native';

const ChangePin = (props) => {
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

  async function onSubmit() {
    if (allPin == null || allPin.length < 5 || allPin == 0) {
      ToastAndroid.show('The pin must be more than 6', ToastAndroid.SHORT);
    } else {
      await dispatch(
        PatchProfile(
          {
            token: Auth.data.token,
            pin: allPin,
          },
          props.navigation,
        ),
      );
    }
  }

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <Card.Content style={{marginTop: 15}}>
          <View style={{marginBottom: 30}}>
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
              marginBottom: '50%',
              justifyContent: 'space-between',
            }}>
            <View>
              <Card style={{width: 50, borderRadius: 20}}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    borderColor: pin ? 'blue' : 'transparent',
                    borderWidth: 2,
                    borderRadius: 20,
                    fontSize: 20,
                    elevation: 1,
                  }}
                  maxLength={1}
                  value={pin}
                  returnKeyType="next"
                  onChangeText={(text) => setPin(text)}
                  keyboardType="number-pad"
                />
              </Card>
            </View>

            <View>
              <Card style={{width: 50, borderRadius: 20}}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    borderColor: pin2 ? 'blue' : 'transparent',
                    borderWidth: 2,
                    borderRadius: 20,
                    fontSize: 20,
                    elevation: 1,
                  }}
                  maxLength={1}
                  value={pin2}
                  returnKeyType="next"
                  onChangeText={(text) => setPin2(text)}
                  keyboardType="number-pad"
                />
              </Card>
            </View>

            <View>
              <Card style={{width: 50, borderRadius: 20}}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    borderColor: pin3 ? 'blue' : 'transparent',
                    borderWidth: 2,
                    borderRadius: 20,
                    fontSize: 20,
                    elevation: 1,
                  }}
                  maxLength={1}
                  value={pin3}
                  returnKeyType="next"
                  onChangeText={(text) => setPin3(text)}
                  keyboardType="number-pad"
                />
              </Card>
            </View>

            <View>
              <Card style={{width: 50, borderRadius: 20}}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    borderColor: pin4 ? 'blue' : 'transparent',
                    borderWidth: 2,
                    borderRadius: 20,
                    fontSize: 20,
                    elevation: 1,
                  }}
                  maxLength={1}
                  value={pin4}
                  returnKeyType="next"
                  onChangeText={(text) => setPin4(text)}
                  keyboardType="number-pad"
                />
              </Card>
            </View>

            <View>
              <Card style={{width: 50, borderRadius: 20}}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    borderColor: pin5 ? 'blue' : 'transparent',
                    borderWidth: 2,
                    borderRadius: 20,
                    fontSize: 20,
                    elevation: 1,
                  }}
                  maxLength={1}
                  value={pin5}
                  returnKeyType="next"
                  onChangeText={(text) => setPin5(text)}
                  keyboardType="number-pad"
                />
              </Card>
            </View>

            <View>
              <Card style={{width: 50, borderRadius: 20}}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    borderColor: pin6 ? 'blue' : 'transparent',
                    borderWidth: 2,
                    borderRadius: 20,
                    fontSize: 20,
                    elevation: 1,
                  }}
                  maxLength={1}
                  value={pin6}
                  returnKeyType="send"
                  onChangeText={(text) => setPin6(text)}
                  keyboardType="number-pad"
                />
              </Card>
            </View>
          </View>

          <View style={{paddingBottom: 20}}>
            <Button
              style={{
                backgroundColor:
                  pin && pin2 && pin3 && pin4 & pin5 && pin6
                    ? '#6379F4'
                    : '#DADADA',
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
