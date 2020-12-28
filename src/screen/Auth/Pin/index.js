import React from 'react';
import {ScrollView, View, TextInput} from 'react-native';
import {Button, Text, Card} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {AuthRegisterPin} from '../../../redux/actions/Auth';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Pin = (props) => {
  const [pin, setPin] = React.useState('');
  const [pin2, setPin2] = React.useState('');
  const [pin3, setPin3] = React.useState('');
  const [pin4, setPin4] = React.useState('');
  const [pin5, setPin5] = React.useState('');
  const [pin6, setPin6] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [emailRegsiter, setEmailRegsiter] = React.useState('');

  const allPin = pin + pin2 + pin3 + pin4 + pin5 + pin6;
  const dispatch = useDispatch();

  async function getAmount() {
    let emailRegsiter = await AsyncStorage.getItem('emailRegsiter');
    return setEmailRegsiter(emailRegsiter);
  }

  getAmount();
  console.log(emailRegsiter);

  async function onSubmit() {
    if (allPin == null || allPin.length < 5 || allPin == 0) {
      ToastAndroid.show('The pin must be more than 6', ToastAndroid.SHORT);
    } else {
      await dispatch(
        AuthRegisterPin(
          {
            email: emailRegsiter,
            pin: allPin,
          },
          props.navigation,
        ),
      );
    }
  }

  return (
    <>
      <View style={{backgroundColor: '#fafcff', height: '100%'}}>
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
          style={{borderTopEndRadius: 50,borderTopStartRadius: 50 ,backgroundColor: 'white', bottom: 0, position: 'absolute', width: '100%'}}>
          <Card.Content style={{marginTop: 15}}>
            <View>
              <Text
                style={{textAlign: 'center', marginBottom: '5%', fontSize: 20}}>
                Create Pin
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
              <View style={{marginTop: 30, marginBottom: 30}}>
                <Text
                  style={{
                    marginBottom: 20,
                    color: 'rgba(58, 61, 66, 0.6)',
                  }}>
                  Enter your current 6 digits Zwallet PIN below to continue to
                  the next steps.
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

              <View>
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
                  Create Pin
                </Button>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
    </>
  );
};

export default Pin;
