import React from 'react';
import {View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card, Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import { DateTime } from "luxon";

const Confirm = ({route, navigation}) => {

  const [transferDate, setTransferDate] = React.useState(
    DateTime.local().toFormat("DD - hh.mm")
  );

  const {myData} = useSelector((s) => s.Users);
  const {dataTr} = useSelector((s) => s.Users);

  const notes = route.params.notes;
  const amount = route.params.amount;
  const id = route.params.id;

  return (
    <>
      <ScrollView style={{backgroundColor: '#fafcff'}}>
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
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>{transferDate}</Text>
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
                navigation.navigate('Enter Your Pin', {
                  id: id,
                  amount: amount,
                  notes: notes,
                })
              }
              color="#116242"
              mode="contained">
              Continue
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Confirm;
