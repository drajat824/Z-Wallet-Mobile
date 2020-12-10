import React from 'react';
import {Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card} from 'react-native-paper';
// import BarChart from "./../../../component/charts/BarChart"

const Transaction = ({navigation}) => {
  return (
    <>
      {/* <ScrollView  style={{ backgroundColor: "#fafcff" }}> */}
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          paddingTop: 30,
          backgroundColor: '#fafcff',
        }}>
        <View style={{flex: 1}}>
          <Card
            style={{
              borderRadius: 25,
              backgroundColor: '#6379F4',
              height: '100%',
              width: '95%',
              alignSelf: 'center',
            }}>
            <Card.Content
              style={{flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
              <View style={{marginBottom: 5}}>
                <Text style={{color: '#D0D0D0'}}>Balance</Text>
              </View>

              <View style={{flex: 1}}>
                <Text style={{color: 'white', fontSize: 30}}>Rp. 120.000</Text>
              </View>

              <View>
                <Text style={{color: '#D0D0D0'}}>+62 813-9387-7946</Text>
              </View>
            </Card.Content>
          </Card>
        </View>

        {/* <View style={{flexDirection: "row", alignItems: "stretch", alignSelf: 'center', marginTop: 20}}> */}
        {/* <BarChart/> */}
        {/* </View> */}

        <View style={{flex: 3, height: 50, marginTop: 20}}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
          </ScrollView>
        </View>
      </View>
      {/* </ScrollView> */}
    </>
  );
};

export default Transaction;
