import React from 'react';
import {View, TextInput, Image, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {GetProfileTransfer} from './../../../../redux/actions/Users';
import {ToastAndroid} from 'react-native';
import {IMAGE} from '@env';
import NumberFormat from 'react-number-format';
import LoadingComponent from './../.././../../component/loading';

const Input = ({route, navigation}) => {
  const id = route.params.id;
  const [amount, setAmount] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const dispatch = useDispatch();
  const {dataTr, myData, loading} = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);

  React.useEffect(() => {
    dispatch(
      GetProfileTransfer({
        id: route.params.id,
        token: Auth.data.token,
      }),
    );
  }, []);

  const onSubmit = () => {
    if (amount.length == 0 && notes.length == 0) {
      ToastAndroid.show('Must be Filled', ToastAndroid.SHORT);
    } else {
      navigation.navigate('Confirmation', {
        id: id,
        amount: amount,
        notes: notes,
        balance: myData.data[0].balance,
      });
    }
  };

  return loading || !dataTr || !myData ? (
    <>
      <StatusBar backgroundColor="#fafcff" barStyle="dark-content" />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <LoadingComponent />
      </View>
    </>
  ) : (
    <>
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <View>
          <ScrollView>
            <View style={{marginTop: 50, marginBottom: '3%'}}>
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
                    {!dataTr ? (
                      <View />
                    ) : (
                      <View>
                        <Image
                          source={{
                            uri: IMAGE + dataTr.data.photo,
                          }}
                          style={{width: 50, height: 50, borderRadius: 15}}
                        />
                      </View>
                    )}
                    {!dataTr ? (
                      <View />
                    ) : (
                      <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                        <Text>{dataTr ? dataTr.data.name : <View />}</Text>
                        <Text style={{color: '#7A7886'}}>
                          {dataTr ? (
                            dataTr.data.phone ? (
                              dataTr.data.phone
                            ) : (
                              ''
                            )
                          ) : (
                            <View />
                          )}
                        </Text>
                      </View>
                    )}
                  </View>
                </Card.Content>
              </Card>

              <NumberFormat
                value={!myData ? '0' : myData.data[0].balance - amount}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'Rp'}
                renderText={(value) => (
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 15,
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}>
                    {value} Available
                  </Text>
                )}
              />

              <TextInput
                onChangeText={(text) => setAmount(text)}
                placeholder="0.00"
                keyboardType="number-pad"
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 60,
                  width: '100%',
                  color: '#6379F4',
                }}
              />

              <View>
                <View style={{flexDirection: 'row', marginLeft: 20}}>
                  <Icon
                    name="pencil"
                    size={20}
                    style={{
                      top: 12,
                      marginRight: 15,
                      color: notes ? 'blue' : 'rgba(169, 169, 169, 0.6)',
                    }}
                  />
                  <TextInput
                    onChangeText={(text) => setNotes(text)}
                    placeholder="Add some notes"
                    onSubmitEditing={() => {
                      if (amount > myData.data[0].balance) {
                        ToastAndroid.show(
                          'Your money is not enough',
                          ToastAndroid.SHORT,
                        );
                      } else {
                        onSubmit();
                      }
                    }}
                  />
                </View>
                <View
                  style={{
                    borderBottomColor: notes ? 'blue' : 'black',
                    borderBottomWidth: 1,
                    width: '90%',
                    alignSelf: 'center',
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default Input;
