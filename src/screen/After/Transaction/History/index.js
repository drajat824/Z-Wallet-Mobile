import React from 'react';
import {Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const TrHistory = ({navigation}) => {
  return (
    <>
      <View
        style={{
          flex: 3,
          flexDirection: 'column',
          alignItems: 'stretch',
          paddingTop: 30,
          backgroundColor: '#fafcff',
        }}>
        {/* Week */}

        <View style={{flex: 1, height: 50}}>
          <View style={{flexDirection: 'column'}}>
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
                  <View style={{marginLeft: 10}}>
                    <Image
                      source={{
                        uri:
                          'https://topmeaning.com/english/images/img/EN/g/guy.jpg',
                      }}
                      style={{width: 50, height: 50, borderRadius: 15}}
                    />
                  </View>

                  <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                    <Text>Samuel Sushi</Text>
                    <Text style={{color: '#7A7886'}}>Transfer</Text>
                  </View>

                  <View style={{marginTop: 10}}>
                    <Text>Rp. 100.000 </Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>

        {/* Month */}

        <View style={{flex: 2, height: 50}}>
          <View style={{flexDirection: 'column'}}>
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
                  <View style={{marginLeft: 10}}>
                    <Image
                      source={{
                        uri:
                          'https://topmeaning.com/english/images/img/EN/g/guy.jpg',
                      }}
                      style={{width: 50, height: 50, borderRadius: 15}}
                    />
                  </View>

                  <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                    <Text>Samuel Sushi</Text>
                    <Text style={{color: '#7A7886'}}>Transfer</Text>
                  </View>

                  <View style={{marginTop: 10}}>
                    <Text>Rp. 100.000 </Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
          }}>
          <View>
            <Card
              style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                borderRadius: 15,
              }}>
              <Icon name="arrow-up" color="red" />
            </Card>
          </View>

          <View>
            <Card
              style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                borderRadius: 15,
              }}>
              <Icon name="arrow-down" color="green" />
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
                <Text style={{textAlign: 'center', color: 'blue'}}>
                  Filter By Date
                </Text>
              </Card.Content>
            </Card>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </>
  );
};

export default TrHistory;
