import React from 'react';
import {Image, View, Modal, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import Date from './../.././../../component/date';
import {
  GetTransferWeek,
  GetTransferDay,
} from '../../../../redux/actions/Transfer';
import NumberFormat from 'react-number-format';
import LoadingComponent from '../../../../component/loading';

const Notif = (props) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [income, setIncome] = React.useState(false);
  const [expense, setExpense] = React.useState(false);

  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const {myData} = useSelector((s) => s.Users);

  React.useEffect(() => {
    dispatch(
      GetTransferWeek({
        token: Auth.data.token,
      }),
    );
    dispatch(
      GetTransferDay({
        token: Auth.data.token,
      }),
    );
  }, []);

  const {getTrWeek, getTrDay} = useSelector((s) => s.Transfer);
  console.log(expense, income);

  return !getTrWeek || !getTrDay ? (
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
          backgroundColor: '#fafcff',
        }}>
        <ScrollView>
          <View
            style={{flexDirection: 'column', marginTop: 10, marginBottom: 10}}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{marginLeft: 20}}>
                  <Text style={{fontSize: 15}}>Today</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            {getTrDay == null ? (
              <View />
            ) : (
              getTrDay.map((item) => (
                <View>
                  <Card
                    style={{
                      backgroundColor: 'white',
                      elevation: 5,
                      width: '95%',
                      alignSelf: 'center',
                      height: 80,
                      borderRadius: 15,
                      marginVertical: 5,
                    }}>
                    <Card.Content>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{marginLeft: 10}}>
                          <Image
                            source={{
                              uri:
                                item.id_sender == myData.data[0].id_profile
                                  ? '3.88.220.160:8000/images/' +
                                    item.photo_receiver
                                  : '3.88.220.160:8000/images/' +
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
                          <Text
                            style={{
                              color:
                                item.id_sender == myData.data[0].id_profile
                                  ? '#FF5B37'
                                  : '#1EC15F',
                              fontWeight: 'bold',
                            }}>
                            <NumberFormat
                              value={item.amount}
                              displayType={'text'}
                              thousandSeparator={true}
                              prefix={'Rp'}
                              renderText={(value) => (
                                <Text
                                  style={{
                                    color:
                                      item.id_sender ==
                                      myData.data[0].id_profile
                                        ? '#FF5B37'
                                        : '#1EC15F',
                                    fontWeight: 'bold',
                                  }}>
                                  {value}
                                </Text>
                              )}
                            />
                          </Text>
                        </View>
                      </View>
                    </Card.Content>
                  </Card>
                </View>
              ))
            )}
          </View>

          {/* Month */}

          <View
            style={{flexDirection: 'column', marginTop: 10, marginBottom: 10}}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{marginLeft: 20}}>
                  <Text style={{fontSize: 15}}>This Week</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            {getTrWeek == null ? (
              <View />
            ) : (
              getTrWeek.map((item) => (
                <View>
                  <Card
                    style={{
                      backgroundColor: 'white',
                      elevation: 5,
                      width: '95%',
                      alignSelf: 'center',
                      height: 80,
                      borderRadius: 15,
                      marginVertical: 5,
                    }}>
                    <Card.Content>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{marginLeft: 10}}>
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
                          <Text
                            style={{
                              color:
                                item.id_sender == myData.data[0].id_profile
                                  ? '#FF5B37'
                                  : '#1EC15F',
                              fontWeight: 'bold',
                            }}>
                            <NumberFormat
                              value={item.amount}
                              displayType={'text'}
                              thousandSeparator={true}
                              prefix={'Rp'}
                              renderText={(value) => (
                                <Text
                                  style={{
                                    color:
                                      item.id_sender ==
                                      myData.data[0].id_profile
                                        ? '#FF5B37'
                                        : '#1EC15F',
                                    fontWeight: 'bold',
                                  }}>
                                  {value}
                                </Text>
                              )}
                            />
                          </Text>
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

export default Notif;
