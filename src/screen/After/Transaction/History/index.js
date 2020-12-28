import React from 'react';
import {Image, View, Modal, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import Date from './../.././../../component/date';
import {
  GetTransferWeek,
  GetTransferMonth,
} from '../../../../redux/actions/Transfer';
import NumberFormat from 'react-number-format';
import LoadingComponent from '../../../../component/loading';

const TrHistory = (props) => {
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
      GetTransferMonth({
        token: Auth.data.token,
      }),
    );
  }, []);

  const {getTrWeek, getTrMonth, loading} = useSelector((s) => s.Transfer);
  console.log(expense, income);

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
                  <Text style={{fontSize: 15}}>This Week</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            {!getTrWeek || getTrWeek == null ? (
              <View />
            ) : expense == false && income == false ? (
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
            ) : income == true ? (
              getTrWeek.map((item) =>
                item.id_receiver == myData.data[0].id_profile ? (
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
                          </View>
                        </View>
                      </Card.Content>
                    </Card>
                  </View>
                ) : (
                  <View />
                ),
              )
            ) : (
              getTrWeek.map((item) =>
                item.id_sender == myData.data[0].id_profile ? (
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
                          </View>
                        </View>
                      </Card.Content>
                    </Card>
                  </View>
                ) : (
                  <View />
                ),
              )
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
                  <Text style={{fontSize: 15}}>This Month</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            {!getTrMonth || getTrMonth == null ? (
              <View />
            ) : expense == false && income == false ? (
              getTrMonth.map((item) => (
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
            ) : income == true ? (
              getTrMonth.map((item) =>
                item.id_receiver == myData.data[0].id_profile ? (
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
                          </View>
                        </View>
                      </Card.Content>
                    </Card>
                  </View>
                ) : (
                  <View />
                ),
              )
            ) : (
              getTrMonth.map((item) =>
                item.id_sender == myData.data[0].id_profile ? (
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
                          </View>
                        </View>
                      </Card.Content>
                    </Card>
                  </View>
                ) : (
                  <View />
                ),
              )
            )}
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          bottom: 0,
          position: 'absolute',
          width: '100%',
          backgroundColor: '#fafcff',
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}>
          <View style={{marginRight: 10}}>
            <Card
              onPress={() => {
                setExpense(!expense);
                setIncome(false);
              }}
              style={{
                backgroundColor: expense == true ? '#6379F4' : 'white',
                width: 50,
                height: 50,
                borderRadius: 15,
                alignItems: 'center',
              }}>
              <Image
                style={{width: 30, height: 30, top: '25%'}}
                source={require('./../../../../../images/arrow-red.png')}
              />
            </Card>
          </View>

          <View style={{marginRight: 10}}>
            <Card
              onPress={() => {
                setIncome(!income);
                setExpense(false);
              }}
              style={{
                backgroundColor: income == true ? '#6379F4' : 'white',
                width: 50,
                height: 50,
                borderRadius: 15,
                alignItems: 'center',
              }}>
              <Image
                style={{width: 30, height: 30, top: '25%'}}
                source={require('./../../../../../images/arrow-green.png')}
              />
            </Card>
          </View>

          <View>
            <Card
              style={{
                backgroundColor: 'white',
                width: 200,
                height: 50,
                borderRadius: 15,
              }}>
              <Card.Content>
                <Text
                  onPress={() => setModalVisible(true)}
                  style={{textAlign: 'center', color: 'blue'}}>
                  Filter By Date
                </Text>
              </Card.Content>
            </Card>
          </View>
        </View>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Card.Content
          style={{
            backgroundColor: 'white',
            bottom: 0,
            position: 'absolute',
            width: '100%',
            height: 500,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            flexDirection: 'column',
          }}>
          <Text
            onPress={() => setModalVisible(false)}
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 10,
              elevationTop: 5,
            }}>
            Filter By Date
          </Text>
          <View>
            <Date />
          </View>

          <View
            onPress={(props) => console.log(props)}
            style={{
              bottom: 20,
              alignSelf: 'center',
              position: 'absolute',
              backgroundColor: '#6379F4',
              width: '90%',
              borderRadius: 15,
              height: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 15,
                textAlign: 'center',
              }}>
              {' '}
              Appply{' '}
            </Text>
          </View>
        </Card.Content>
      </Modal>
    </>
  );
};

export default TrHistory;
