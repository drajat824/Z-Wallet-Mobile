import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {GetTopup} from './../../../redux/actions/Topup';
import LoadingComponent from './../.././../component/loading';

const Topup = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const {dataTopup} = useSelector((s) => s.Topup);

  React.useEffect(() => {
    dispatch(
      GetTopup({
        token: Auth.data.token,
      }),
    );
  }, []);

  return !dataTopup ? (
    <>
      <StatusBar backgroundColor="#fafcff" barStyle="dark-content" />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <LoadingComponent />
      </View>
    </>
  ) : (
    <>
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <View>
          <Card
            style={{
              backgroundColor: 'white',
              elevation: 5,
              width: '95%',
              alignSelf: 'center',
              height: 80,
              borderRadius: 15,
              marginTop: 20,
              marginBottom: 20,
            }}>
            <Card.Content style={{flexDirection: 'row'}}>
              <View>
                <Card
                  style={{backgroundColor: '#EBEEF2', width: 50, height: 50}}>
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      alignSelf: 'center',
                      marginTop: 10,
                    }}
                    source={require('./../../../../images/plus.png')}
                  />
                </Card>
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={{marginBottom: 5, color: '#7A7886'}}>
                  Virtual Account Number
                </Text>
                <Text style={{fontWeight: 'bold'}}>456 2341 1236</Text>
              </View>
            </Card.Content>
          </Card>

          <Text style={{textAlign: 'center', color: '#7A7886'}}>
            We provide you virtual account number for top up via nearest ATM.
          </Text>
          <Text style={{marginLeft: 15, marginTop: 30, fontSize: 15}}>
            How to Top Up
          </Text>
          {dataTopup.data.length == 0 ? (
            <View />
          ) : (
            dataTopup.data.map((item) => (
              <View>
                <Card
                  style={{
                    backgroundColor: 'white',
                    elevation: 2,
                    width: '95%',
                    height: 80,
                    borderRadius: 15,
                    marginTop: 10,
                    marginBottom: 10,
                    alignSelf: 'center',
                  }}>
                  <Card.Content
                    style={{flexDirection: 'row', marginHorizontal: 20}}>
                    <View>
                      <Text
                        style={{
                          color: '#6379F4',
                          fontWeight: 'bold',
                          fontSize: 16,
                          marginRight: 10,
                        }}>
                        {item.number}
                      </Text>
                    </View>
                    <View>
                      <Text style={{color: '#7A7886', fontSize: 16}}>
                        {item.step}
                      </Text>
                    </View>
                  </Card.Content>
                </Card>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default Topup;
