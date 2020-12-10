import React from 'react';
import {View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

const Status = ({route, navigation}) => {
  var success = require('./../../../../../images/success.png');
  var failed = require('./../../../../../images/failed.png');

  const notes = route.params.notes;
  const amount = route.params.amount;
  const id = route.params.id;

  const {myData} = useSelector((s) => s.Users);
  const {dataTr} = useSelector((s) => s.Users);

  return (
    <>
      <ScrollView style={{backgroundColor: '#fafcff'}}>

        {/* {!route.params.status == undefined ? ( */}

        {/* <View style={{marginTop: 20}}>
          <Image
            style={{
              alignSelf: 'center',
              width: 60,
              height: 60,
              resizeMode: 'stretch',
            }}
            source={failed}
          />

          <Text style={{textAlign: 'center', color: '#7A7886'}}>
            We can’t transfer your money at the moment, we recommend you to
            check your internet connection and try again.
          </Text>

        </View>

) : ( */}

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
        {/* ) 
} */}

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
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                      {amount}
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
                    <Text style={{color: '#7A7886'}}>Balance Left</Text>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                      {myData.data.balance ? myData.data.balance : '0'}
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
                    <Text style={{color: '#7A7886'}}>Date & Time</Text>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>{myData.data.date}</Text>
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
                            source={{
                              uri:
                                'https://topmeaning.com/english/images/img/EN/g/guy.jpg',
                            }}
                            style={{width: 50, height: 50, borderRadius: 15}}
                          />
                        </View>

                        <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                          <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                            {dataTr.data.name}
                          </Text>
                          <Text style={{color: '#7A7886'}}>
                            {dataTr.data.phone ? dataTr.data.phone : '+62'}
                          </Text>
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
              onPress={() =>
                navigation.push('Dashboard')
              }
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

export default Status;
