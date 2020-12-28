import React from 'react';
import {ScrollView, View, TextInput, Image} from 'react-native';
import {Button, Text, Card} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {PatchProfile} from './../../../../redux/actions/Users';

const AddPhone = (props) => {
  const [phone, setPhone] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const dispatch = useDispatch();

  const Auth = useSelector((s) => s.Auth);

  const onSubmit = async () => {
    if (phone.length <= 10 || !phone) {
      setError(true);
    } else {
      await setError(false);
      dispatch(
        PatchProfile(
          {
            phone: phone,
            token: Auth.data.token,
          },
          props.navigation,
        ),
      );
    }
  };

  return (
    <>
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <Card.Content style={{marginTop: 15}}>
          <View>
            <Text
              style={{
                marginBottom: 40,
                color: 'rgba(58, 61, 66, 0.6)',
                textAlign: 'center',
              }}>
              Add at least one phone number for the transfer {'\n'} ID so you
              can start transfering your money to another user.
            </Text>
          </View>

          <View style={{flexDirection: 'column', marginBottom: '20%'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 20, height: 20, marginTop: 15, marginRight: 10}}
                source={
                  !phone
                    ? require('./../../../../../images/phone.png')
                    : require('./../../../../../images/phone-active.png')
                }
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  marginTop: 12,
                  fontSize: 17,
                  marginRight: 10,
                }}>
                +62
              </Text>
              <TextInput
                style={{backgroundColor: '#fafcff'}}
                placeholder="Enter your phone number"
                value={phone}
                keyboardType="number-pad"
                returnKeyType="send"
                onChangeText={(text) => setPhone(text)}
              />
            </View>

            <View
              style={{
                borderBottomColor: !phone ? '#DADADA' : 'blue',
                borderBottomWidth: 2,
              }}
            />
          </View>

          {error == true ? (
            <Text style={{color: 'red', textAlign: 'center'}}>
              Number must be more than 10{' '}
            </Text>
          ) : (
            <View />
          )}

          <View style={{marginTop: '70%'}}>
            <Button
              style={{
                backgroundColor: phone ? '#6379F4' : '#DADADA',
                borderRadius: 12,
                height: 57,
                width: '100%',
                alignSelf: 'center',
                justifyContent: 'center',
              }}
              onPress={() => onSubmit()}
              color="#116242"
              mode="contained"
              disabled={loading}
              loading={loading}>
              Submit
            </Button>
          </View>
        </Card.Content>
      </ScrollView>
    </>
  );
};

export default AddPhone;
