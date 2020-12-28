import React from 'react';
import {View, TextInput, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {PostTransfer} from './../../../../redux/actions/Transfer';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LoadingComponent from './../.././../../component/loading';

const PinConfirm = (props) => {
  const dispatch = useDispatch();

  const [pin, setPin] = React.useState('');
  const [pin2, setPin2] = React.useState('');
  const [pin3, setPin3] = React.useState('');
  const [pin4, setPin4] = React.useState('');
  const [pin5, setPin5] = React.useState('');
  const [pin6, setPin6] = React.useState('');
  const allPin = pin + pin2 + pin3 + pin4 + pin5 + pin6;

  const {loading} = useSelector((s) => s.Transfer);
  const Auth = useSelector((s) => s.Auth);
  const {myData} = useSelector((s) => s.Users);

  const cekPin = myData.data[0].pin;

  const id = props.route.params.id;
  const balance = props.route.params.balance;
  const amount = props.route.params.amount;
  const notes = props.route.params.notes;
  const date = props.route.params.date;
  const photo = props.route.params.photo;
  const phone = props.route.params.phone;
  const name = props.route.params.name;

  console.log(notes);

  const saveAsync = async () => {
    try {
      const setBalance = JSON.stringify(balance);

      await AsyncStorage.setItem('balance', setBalance);
      await AsyncStorage.setItem('amount', amount);
      await AsyncStorage.setItem('date', date);
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('photo', photo);
      await AsyncStorage.setItem('phone', phone);
      await AsyncStorage.setItem('notes', notes);

      await console.log('Success Set Item');
    } catch (e) {
      return false;
    }
  };

  async function onSubmit() {
    if (cekPin != allPin) {
      ToastAndroid.show('Pin Wrong', ToastAndroid.SHORT);
    } else {
      await saveAsync();

      dispatch(
        PostTransfer(
          {
            id_receiver: id,
            amount: amount,
            notes: notes,
            token: Auth.data.token,
          },
          props.navigation,
        ),
      );
    }
  }
  return loading || !myData ? (
    <>
      <StatusBar backgroundColor="#fafcff" barStyle="dark-content" />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <LoadingComponent />
      </View>
    </>
  ) : (
    <>
      <StatusBar backgroundColor="#fafcff" barStyle="dark-content" />
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <Text style={{color: '#7A7886', marginTop: '10%', marginLeft: '5%'}}>
          Enter your 6 digits PIN for confirmation to continue transferring
          money
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: '10%',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
            marginBottom: '25%',
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
          mode="contained">
          Continue
        </Button>
      </ScrollView>
    </>
  );
};

export default PinConfirm;
