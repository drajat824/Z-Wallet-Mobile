import React from 'react';
import {View, TextInput, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {
  GetProfileName,
  GetProfileTransfer,
} from './../../../../redux/actions/Users';
import {ToastAndroid} from 'react-native';

const Input = ({route, navigation}) => {
  console.log(route.params.id);

  const id = route.params.id;

  const [amount, setAmount] = React.useState('');
  const [notes, setNotes] = React.useState('');

  const dispatch = useDispatch();
  const {dataTr, loading} = useSelector((s) => s.Users);
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
      });
    }
  };

  return (
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
                    <View>
                      <Image
                        source={{
                          uri:
                            'https://topmeaning.com/english/images/img/EN/g/guy.jpg',
                        }}
                        style={{width: 50, height: 50, borderRadius: 15}}
                      />
                    </View>

                    <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                      <Text>{dataTr ? dataTr.data.name : <View />}</Text>
                      <Text style={{color: '#7A7886'}}>
                        {dataTr ? (
                          dataTr.data.phone ? (
                            dataTr.data.phone
                          ) : (
                            '+62'
                          )
                        ) : (
                          <View />
                        )}
                      </Text>
                    </View>
                  </View>
                </Card.Content>
              </Card>

              <Text
                style={{
                  color: '#7C7895',
                  textAlign: 'center',
                  marginTop: 15,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Rp120.000 Available
              </Text>

              <TextInput
                onChangeText={(text) => setAmount(text)}
                placeholder="0.00"
                keyboardType="number-pad"
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 60,
                  width: '100%',
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
                      color: 'rgba(169, 169, 169, 0.6)',
                    }}
                  />
                  <TextInput
                    onChangeText={(text) => setNotes(text)}
                    placeholder="Add some notes"
                    onSubmitEditing={() => onSubmit()}
                  />
                </View>
                <View
                  style={{
                    borderBottomColor: 'black',
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
