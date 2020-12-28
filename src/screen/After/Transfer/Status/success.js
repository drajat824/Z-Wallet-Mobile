import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card, Button} from 'react-native-paper';
import NumberFormat from 'react-number-format';
import {IMAGE} from '@env';
import AsyncStorage from '@react-native-community/async-storage';

const Success = ({route, navigation}) => {
  const success = require('./../../../../../images/success.png');

  const [balance, setBalance] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const [date, setDate] = React.useState('');
  const [photo, setPhoto] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');

  async function getAmount() {
    let amount = await AsyncStorage.getItem('amount');
    let balance = await AsyncStorage.getItem('balance');
    let notes = await AsyncStorage.getItem('notes');
    let date = await AsyncStorage.getItem('date');
    let photo = await AsyncStorage.getItem('photo');
    let phone = await AsyncStorage.getItem('phone');
    let name = await AsyncStorage.getItem('name');

    return [
      setBalance(balance),
      setAmount(amount),
      setNotes(notes),
      setDate(date),
      setPhoto(photo),
      setPhone(phone),
      setName(name),
    ];
  }

  getAmount();

  console.log(notes);

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <View style={{marginTop: 20}}>
          <Image
            style={{
              alignSelf: 'center',
              width: 60,
              height: 60,
              resizeMode: 'stretch',
            }}
            source={success}
          />

          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Transfer Success
          </Text>
        </View>

        <View>
          <Text style={{marginLeft: 15, marginTop: 30, fontSize: 15}}>
            Details
          </Text>

          <View style={{marginTop: '3%', marginBottom: '3%'}}>
            <Card
              style={{
                backgroundColor: 'white',
                elevation: 5,
                width: '95%',
                alignSelf: 'center',
                borderRadius: 15,
                marginBottom: 15,
              }}>
              <Card.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flex: 1, marginLeft: 5, marginTop: 5}}>
                    <Text style={{color: '#7A7886'}}>Amount</Text>

                    <NumberFormat
                      value={amount}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'Rp'}
                      renderText={(value) => (
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 30,
                          }}>
                          {value}
                        </Text>
                      )}
                    />
                  </View>
                </View>
              </Card.Content>
            </Card>

            <Card
              style={{
                backgroundColor: 'white',
                elevation: 5,
                width: '95%',
                alignSelf: 'center',
                borderRadius: 15,
                marginBottom: 15,
              }}>
              <Card.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flex: 1, marginLeft: 5, marginTop: 5}}>
                    <Text style={{color: '#7A7886'}}>Balance Left</Text>

                    <NumberFormat
                      value={balance}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'Rp'}
                      renderText={(value) => (
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 30,
                          }}>
                          {value}
                        </Text>
                      )}
                    />
                  </View>
                </View>
              </Card.Content>
            </Card>

            <Card
              style={{
                backgroundColor: 'white',
                elevation: 5,
                width: '95%',
                alignSelf: 'center',
                borderRadius: 15,
                marginBottom: 15,
              }}>
              <Card.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flex: 1, marginLeft: 5, marginTop: 5}}>
                    <Text style={{color: '#7A7886'}}>Date & Time</Text>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                      {date}
                    </Text>
                  </View>
                </View>
              </Card.Content>
            </Card>

            <Card
              style={{
                backgroundColor: 'white',
                elevation: 5,
                width: '95%',
                alignSelf: 'center',
                borderRadius: 15,
                marginBottom: 15,
              }}>
              <Card.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flex: 1, marginLeft: 5, marginTop: 5}}>
                    <Text style={{color: '#7A7886'}}>Notes</Text>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                      {notes ? notes : '-'}
                    </Text>
                  </View>
                </View>
              </Card.Content>
            </Card>

            <View>
              <Text style={{marginLeft: 15, marginTop: 30, fontSize: 15}}>
                Transfer To
              </Text>

              <ScrollView>
                <View style={{marginTop: '3%', marginBottom: '3%'}}>
                  <Card
                    style={{
                      backgroundColor: 'white',
                      elevation: 5,
                      width: '95%',
                      alignSelf: 'center',
                      height: 80,
                      borderRadius: 15,
                    }}>
                    <Card.Content>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View>
                          <Image
                            source={{uri: IMAGE + photo}}
                            style={{width: 50, height: 50, borderRadius: 15}}
                          />
                        </View>

                        <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                          <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                            {name}
                          </Text>
                          <Text style={{color: '#7A7886'}}>{phone}</Text>
                        </View>
                      </View>
                    </Card.Content>
                  </Card>
                </View>
              </ScrollView>
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
              onPress={() => navigation.push('Dashboard')}
              color="#116242"
              mode="contained">
              Back To Home
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Success;
