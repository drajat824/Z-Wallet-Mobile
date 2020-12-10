import React from 'react';
import {View, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {PostTransfer} from './../../../../redux/actions/Transfer';
import {ToastAndroid} from 'react-native';

const PinConfirm = ({route, navigation}) => {
  const dispatch = useDispatch();

  const [pin, setPin] = React.useState("");
  const [pin2, setPin2] = React.useState("");
  const [pin3, setPin3] = React.useState("");
  const [pin4, setPin4] = React.useState("");
  const [pin5, setPin5] = React.useState("");
  const [pin6, setPin6] = React.useState("");
  const allPin = pin + pin2 + pin3 + pin4 + pin5 + pin6;

  const Auth = useSelector((s) => s.Auth);
  const {data} = useSelector((s) => s.Transfer);
  const {myData} = useSelector((s) => s.Users);

  const cekPin = myData.data[0].pin

  const id = route.params.id;
  const amount = route.params.amount;
  const notes = route.params.notes;

  async function onSubmit() {

    if(!cekPin == allPin) {
      ToastAndroid.show('Pin Wrong', ToastAndroid.SHORT);
    } else {

    dispatch(
      PostTransfer({
        id_receiver: id,
        amount: amount,
        notes: notes,
        token: Auth.data.token,
      }),
    );
    navigation.navigate('Status', {status: data, amount: amount, notes: notes, id: id});
  }
}

  return (
    <>
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
            marginBottom: '100%',
          }}>
          <View>
            <Card style={{width: 50}}>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'grey',
                }}
                value={pin}
                returnKeyType="next"
                onChangeText={(text) => setPin(text)}
                keyboardType="number-pad"
              />
            </Card>
          </View>

          <View>
            <Card style={{width: 50}}>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'grey',
                }}
                value={pin2}
                returnKeyType="next"
                onChangeText={(text) => setPin2(text)}
                keyboardType="number-pad"
              />
            </Card>
          </View>

          <View>
            <Card style={{width: 50}}>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'grey',
                }}
                value={pin3}
                returnKeyType="next"
                onChangeText={(text) => setPin3(text)}
                keyboardType="number-pad"
              />
            </Card>
          </View>

          <View>
            <Card style={{width: 50}}>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'grey',
                }}
                value={pin4}
                returnKeyType="next"
                onChangeText={(text) => setPin4(text)}
                keyboardType="number-pad"
              />
            </Card>
          </View>

          <View>
            <Card style={{width: 50}}>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'grey',
                }}
                value={pin5}
                returnKeyType="next"
                onChangeText={(text) => setPin5(text)}
                keyboardType="number-pad"
              />
            </Card>
          </View>

          <View>
            <Card style={{width: 50}}>
              <TextInput
                style={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: 'grey',
                }}
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
            backgroundColor: '#6379F4',
            borderRadius: 12,
            height: 57,
            width: '95%',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          // onPress={() => onSubmit()}
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
