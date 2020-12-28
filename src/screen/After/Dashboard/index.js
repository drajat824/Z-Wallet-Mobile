import React from 'react';
import {Image, View, StatusBar, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {GetProfile} from './../../../redux/actions/Users';
import {GetTransfer} from '../../../redux/actions/Transfer';
import {IMAGE} from '@env';
import NumberFormat from 'react-number-format';
import LoadingComponent from './../.././../component/loading';

const Dashboard = ({navigation}) => {
  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const {myData} = useSelector((s) => s.Users);
  const {getTr, loading} = useSelector((s) => s.Transfer);

  React.useEffect(() => {
    dispatch(
      GetProfile({
        token: Auth.data.token,
      }),
    );
    dispatch(
      GetTransfer({
        token: Auth.data.token,
        page: 1,
        limit: 4,
      }),
    );
  }, []);

  return !myData || loading  ? (
    <>
      <StatusBar backgroundColor="#fafcff" barStyle="dark-content" />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <LoadingComponent />
      </View>
    </>
  ) : (
    <>
      <StatusBar backgroundColor="#fafcff" barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          backgroundColor: '#fafcff',
        }}>
        <ScrollView>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                marginBottom: 20,
              }}>
              <TouchableOpacity
                onPress={() => navigation.push('Profile')}
                style={{marginLeft: 10}}>
                {!myData ? (
                  <View />
                ) : (
                  <Image
                    source={{
                      uri: `${IMAGE}` + myData.data[0].photo,
                    }}
                    style={{width: 50, height: 50, borderRadius: 15}}
                  />
                )}
              </TouchableOpacity>

              <View style={{flex: 1, marginLeft: 10, marginTop: 5}}>
                <Text onPress={() => navigation.push('Profile')}>Hello,</Text>
                {!myData ? (
                  <View />
                ) : (
                  <Text
                    onPress={() => navigation.push('Profile')}
                    style={{fontWeight: 'bold', fontSize: 20}}>
                    {myData.data[0].name}
                  </Text>
                )}
              </View>

              <View style={{marginRight: 15, marginTop: 5}}>
                <TouchableOpacity
                  onPress={() => navigation.push('Notification')}>
                  <Image
                    style={{width: 25, height: 25}}
                    source={require('./../../../../images/bell.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{}}>
            <Card.Content
              style={{
                flexDirection: 'column',
                borderRadius: 25,
                backgroundColor: '#6379F4',
                width: '95%',
                alignSelf: 'center',
                height: 100,
              }}>
              <View>
                <Text style={{color: '#D0D0D0', marginTop: 5}}>Balance</Text>
              </View>

              {!myData ? (
                <View />
              ) : (
                <View>
                  <NumberFormat
                    value={
                      myData.data[0].balance ? myData.data[0].balance : '0;'
                    }
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'Rp'}
                    renderText={(value) => (
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: 30,
                        }}>
                        {value}
                      </Text>
                    )}
                  />
                </View>
              )}

              {!myData ? (
                <View />
              ) : (
                <View>
                  <Text style={{color: '#D0D0D0'}}>
                    {myData.data[0].phone ? myData.data[0].phone : ''}
                  </Text>
                </View>
              )}
            </Card.Content>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              paddingHorizontal: 20,
              justifyContent: 'space-around'
              
            }}>
              

              <TouchableOpacity
              onPress={() => navigation.push('Find Receiver')}
                mode="contained"
                style={{
                  backgroundColor: '#E5E8ED',
                  borderRadius: 15,
                  width: 150,
                  height: 60,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 15,
                    marginHorizontal: 15,
                  }}>
                  <View>
                    <Image
                      style={{width: 30, height: 30, marginRight: 10}}
                      source={require('./../../../../images/transfer.png')}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 20
                      }}>
                      Transfer
                    </Text>
                  </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.push('Topup')}
                mode="contained"
                style={{
                  backgroundColor: '#E5E8ED',
                  borderRadius: 15,
                  width: 150,
                  height: 60,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 15,
                    marginHorizontal: 20,
                  }}>
                  <View>
                    <Image
                      style={{width: 30, height: 30, marginRight: 10}}
                      source={require('./../../../../images/plus.png')}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      Top up
                    </Text>
                  </View>
                </View>
            </TouchableOpacity>
          </View>

          <View
            style={{flex: 3, height: '100%', marginTop: 20, marginBottom: 20}}>
            <View style={{flexDirection: 'column'}}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{marginLeft: 20}}>
                    <Text style={{fontSize: 17}}>Transaction History</Text>
                  </View>
                  <View style={{marginRight: 15}}>
                    <Text
                      onPress={() => navigation.push('Transaction')}
                      style={{color: '#6379F4'}}>
                      See all
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {!getTr || !myData || loading ? (
              <View />
            ) : (
              getTr.map((item) => (
                <View style={{marginTop: '3%'}}>
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
                                item.id_sender == myData.data[0].id_profile
                                  ? IMAGE + item.photo_receiver
                                  : IMAGE + item.photo,
                            }}
                            style={{width: 50, height: 50, borderRadius: 15}}
                          />
                        </View>

                        <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                          <Text>
                            {item.id_sender == myData.data[0].id_profile
                              ? item.name_receiver
                              : item.name}{' '}
                          </Text>
                          <Text style={{color: '#7A7886'}}>Transfer</Text>
                        </View>

                        <View style={{marginTop: 10}}>
                          <NumberFormat
                            value={item.amount}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'Rp'}
                            renderText={(value) => (
                              <Text
                                style={{
                                  color:
                                    item.id_sender == myData.data[0].id_profile
                                      ? '#FF5B37'
                                      : '#1EC15F',
                                  fontWeight: 'bold',
                                }}>
                                {value}
                              </Text>
                            )}
                          />
                        </View>
                      </View>
                    </Card.Content>
                  </Card>
                </View>
              ))
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Dashboard;
