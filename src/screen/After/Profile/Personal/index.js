import React from 'react';
import {View, Image, Switch} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card, Button} from 'react-native-paper';
import {GetProfile} from './../../../../redux/actions/Users';
import {useDispatch, useSelector} from 'react-redux';

const Personal = (props) => {
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const {myData, loading} = useSelector((s) => s.Users);

  React.useEffect(() => {
    dispatch(
      GetProfile({
        token: Auth.data.token,
      }),
    );
  }, []);

  return (
    <>
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <View>
          <Text style={{color: '#7A7886', marginLeft: 15, marginTop: 30}}>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </Text>

          <View>
            <Card
              style={{
                elevation: 5,
                backgroundColor: 'white',
                width: '95%',
                alignSelf: 'center',
                height: 90,
                borderRadius: 15,
                marginTop: 40,
              }}>
              <Card.Content
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                  <Text style={{color: '#7A7886'}}>First Name</Text>
                  <Text
                    style={{
                      color: '#514F5B',
                      fontWeight: 'bold',
                      fontSize: 25,
                    }}>
                    {myData ? (
                      myData.data[0].name.split(' ').slice(0, 1).join(' ')
                    ) : (
                      <TextBlock
                        rows={1}
                        style={{width: 170, marginBottom: 10, height: 25}}
                        color="#f0f0f0"
                      />
                    )}
                  </Text>
                </View>
              </Card.Content>
            </Card>

            <Card
              style={{
                elevation: 5,
                backgroundColor: 'white',
                width: '95%',
                alignSelf: 'center',
                height: 90,
                borderRadius: 15,
                marginTop: 20,
                marginBottom: 20,
              }}>
              <Card.Content
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                  <Text style={{color: '#7A7886'}}>Last Name</Text>
                  <Text
                    style={{
                      color: '#514F5B',
                      fontWeight: 'bold',
                      fontSize: 25,
                    }}>
                    {myData ? (
                      myData.data[0].name.split(' ').slice(1, 3).join(' ')
                    ) : (
                      <TextBlock
                        rows={1}
                        style={{width: 170, marginBottom: 10, height: 25}}
                        color="#f0f0f0"
                      />
                    )}
                  </Text>
                </View>
              </Card.Content>
            </Card>

            <Card
              style={{
                elevation: 5,
                backgroundColor: 'white',
                width: '95%',
                alignSelf: 'center',
                height: 90,
                borderRadius: 15,
              }}>
              <Card.Content
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                  <Text style={{color: '#7A7886'}}>Verifed Email</Text>
                  <Text
                    style={{
                      color: '#514F5B',
                      fontWeight: 'bold',
                      fontSize: 25,
                    }}>
                    {myData.data[0].email ? myData.data[0].email : '-'}
                  </Text>
                </View>
              </Card.Content>
            </Card>

            <Card
              style={{
                elevation: 5,
                backgroundColor: 'white',
                width: '95%',
                alignSelf: 'center',
                height: 90,
                borderRadius: 15,
                marginTop: 20,
                marginBottom: 20,
              }}>
              <Card.Content
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                    <Text style={{color: '#7A7886'}}>Phone Number</Text>
                    <Text
                      style={{
                        color: '#514F5B',
                        fontWeight: 'bold',
                        fontSize: 25,
                      }}>
                      {myData.data[0].phone ? myData.data[0].phone : ''}
                    </Text>
                  </View>

                  <View style={{marginTop: 10, marginRight: 5}}>
                    <Text
                      onPress={() =>
                        props.navigation.push('Manage Phone Number')
                      }
                      style={{color: 'blue'}}>
                      Manage
                    </Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Personal;
