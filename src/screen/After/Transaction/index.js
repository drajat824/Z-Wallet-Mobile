import React from 'react';
import {Image, View, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card} from 'react-native-paper';
import NumberFormat from 'react-number-format';
import {GetProfile} from './../../../redux/actions/Users';
import {GetTransferHistory} from '../../../redux/actions/Transfer';
import {useDispatch, useSelector} from 'react-redux';
import {IMAGE} from '@env';
import LoadingComponent from './../.././../component/loading';
import LoadingComponentSub from './../.././../component/sub_loading';

const Transaction = ({navigation}) => {
  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const {myData} = useSelector((s) => s.Users);

  React.useEffect(() => {
    dispatch(
      GetTransferHistory({
        token: Auth.data.token,
        // page: 1,
        // limit: 4
      }),
    );
  }, []);

  const {getTrHr, loading} = useSelector((s) => s.Transfer);

  return loading ? (
    <>
      <StatusBar backgroundColor="#fafcff" barStyle="dark-content" />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <LoadingComponent />
      </View>
    </>
  ) : (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'stretch',
          backgroundColor: '#fafcff',
        }}>
        <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
          <View style={{flex: 1, marginTop: 20}}>
            <Card
              style={{
                borderRadius: 25,
                backgroundColor: '#6379F4',
                height: '100%',
                width: '95%',
                alignSelf: 'center',
              }}>
              <Card.Content
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginVertical: 10,
                }}>
                <View>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('./../../../../images/arrow-green.png')}
                  />
                  <Text style={{color: '#D0D0D0'}}>Income</Text>
                  {!getTrHr ? (
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: 20,
                      }}>
                      0
                    </Text>
                  ) : (
                    <NumberFormat
                      value={Array.from(
                        getTrHr.map((e) => {
                          if (e.id_receiver == myData.data[0].id_profile) {
                            return e.amount;
                          }
                        }),
                      )
                        .filter((a) => {
                          return a != undefined;
                        })
                        .reduce((a, b) => {
                          if (b != undefined || b != null) {
                            return a + b;
                          }
                        }, 0)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'Rp'}
                      renderText={(value) => (
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: 20,
                          }}>
                          {value}
                        </Text>
                      )}
                    />
                  )}
                </View>

                <View>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('./../../../../images/arrow-red.png')}
                  />
                  <Text style={{color: '#D0D0D0'}}>Expense</Text>
                  {!getTrHr ? (
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: 20,
                      }}>
                      0
                    </Text>
                  ) : (
                    <NumberFormat
                      value={Array.from(
                        getTrHr.map((e) => {
                          if (e.id_sender == myData.data[0].id_profile) {
                            return e.amount;
                          }
                        }),
                      )
                        .filter((a) => {
                          return a != undefined;
                        })
                        .reduce((a, b) => {
                          if (b != undefined || b != null) {
                            return a + b;
                          }
                        }, 0)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'Rp'}
                      renderText={(value) => (
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: 20,
                          }}>
                          {value}
                        </Text>
                      )}
                    />
                  )}
                </View>
              </Card.Content>
            </Card>
          </View>

          <View style={{marginTop: 20, backgroundColor: 'white'}}>
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
                      onPress={() => navigation.push('History')}
                      style={{color: '#6379F4'}}>
                      See all
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {loading ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 40,
                }}>
                <LoadingComponentSub />
              </View>
            ) : !getTrHr || !myData ? (
              <View />
            ) : (
              getTrHr.map((item) => (
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
                            source={{
                              uri:
                                item.id_sender == myData.data[0].id_profile
                                  ? 'http://3.88.220.160:8000/images/' +
                                    item.photo_receiver
                                  : 'http://3.88.220.160:8000/images/' +
                                    item.photo,
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

export default Transaction;
