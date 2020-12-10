import React from 'react';
import {Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Transfer, Topup, Profile} from './../../index';
const Drawer = createDrawerNavigator();
import {AuthLogout} from '../../../redux/actions/Auth';
import {GetProfile, ProfileLogout, LogoutDevice} from './../../../redux/actions/Users';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GetTransfer } from '../../../redux/actions/Transfer';

const RealDashboard = ({navigation}) => {
  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const {myData, loading} = useSelector((s) => s.Users);
  const {getTr} = useSelector((s) => s.Transfer);
  

  React.useEffect(() => {
    dispatch(
      GetProfile({
        token: Auth.data.token,
      }),
    );
    dispatch(
      GetTransfer({
        token: Auth.data.token,
      }),
    );
  }, []);

  console.log(getTr)

  return !myData || loading ? (
    <>
      <View />
    </>
  ) : (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          paddingTop: 30,
          backgroundColor: '#fafcff',
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View style={{marginLeft: 10}}>

            <Image source={{ uri: myData ? ( myData.data[0].photo ? 
            ('http://192.168.43.216:8000/images/' + myData.data[0].photo) : ('https://www.vhv.rs/dpng/d/312-3120300_default-profile-hd-png-download.png')) : (<View />)
              }}
              style={{width: 50, height: 50, borderRadius: 15}}
            /> 

            </View>

            <View style={{flex: 1, marginLeft: 10, marginTop: 5}}>
              <Text>Hello,</Text>
              <Text style={{fontWeight: "bold", fontSize: 20}}>{myData.data[0].name}</Text>
            </View>

            <View style={{marginRight: 15, marginTop: 5}}>
              <Icon size={20} name="bell" />
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
          <Card.Content
            style={{
              flexDirection: 'column',
              borderRadius: 25,
              backgroundColor: '#6379F4',
              height: '100%',
              width: '95%',
              alignSelf: 'center',
            }}>
            <View>
              <Text style={{color: '#D0D0D0', marginTop: 5}}>Balance</Text>
            </View>

            <View>
              <Text style={{color: 'white', fontSize: 30}}>
                {myData.data[0].balance ? myData.data[0].balance : '0;'}
              </Text>
            </View>

            <View>
              <Text style={{color: '#D0D0D0'}}>
                {myData.data[0].phone ? myData.data[0].phone : '+62'}
              </Text>
            </View>
          </Card.Content>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'stretch',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <View style={{marginRight: 10}}>
            <Card
              mode="contained"
              style={{
                backgroundColor: '#E5E8ED',
                borderRadius: 15,
                width: 150,
                height: 60,
              }}>
              <View style={{flexDirection: 'row', top: '5%', marginLeft: 10}}>
                <View>
                  <Icon size={30} style={{top:5, marginRight: 20}} color="blue" name="arrow-up" />
                </View>
                <View>
                  <Text
                    style={{color: 'black', textAlign: 'center', top: '30%'}}>
                    Transfer
                  </Text>
                </View>
              </View>
            </Card>
          </View>
          <View>
            <Card
              mode="contained"
              style={{
                backgroundColor: '#E5E8ED',
                borderRadius: 15,
                width: 150,
                height: 60,
              }}>
              <View style={{flexDirection: 'row', top: '5%', marginLeft: 10}}>
                <View>
                  <Icon size={30} style={{top:5, marginRight: 20}} color="blue" name="plus" />
                </View>
                <View>
                  <Text
                    style={{color: 'black', textAlign: 'center', top: '30%'}}>
                    Topup
                  </Text>
                </View>
              </View>
            </Card>
          </View>
        </View>

        <View style={{flex: 3, height: 50, marginTop: 20}}>
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

          <ScrollView>
          {  !getTr? (<View/>) :  (getTr.map((item) => (         
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
                    <Image source={{
                              uri:

                              item.photo ? 
                              ('http://192.168.43.216:8000/images/' + item.photo) 
                              : ('https://www.vhv.rs/dpng/d/312-3120300_default-profile-hd-png-download.png')

                            }}
                            style={{width: 50, height: 50, borderRadius: 15}}
                          />
                    </View>

                    <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                      <Text>{item.name}</Text>
                      <Text style={{color: '#7A7886'}}>Transfer</Text>
                    </View>

                    <View style={{marginTop: 10}}>
                      <Text style={{color: 'red'}}>Rp. {item.amount}</Text>
                    </View>
                  </View>
                </Card.Content>
              </Card>
              </View>
)))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const Dashboard = () => {
  const Dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);

  const onLogout = () => {
    Dispatch(LogoutDevice({
      token: Auth.data.token,
      device_token: ""
    }))
    Dispatch(AuthLogout());
    Dispatch(ProfileLogout());
  };


  return (
    <>
      <Drawer.Navigator
        drawerContentOptions={{
          activeBackgroundColor: '#6379F4',
          activeTintColor: '#fff',
        }}
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={() => onLogout()} />
          </DrawerContentScrollView>
        )}
        drawerType="back"
        initialRouteName="Welcome"
        overlayColor="#ffffff22">
        <Drawer.Screen name="Dashboard" component={RealDashboard} />
        <Drawer.Screen name="Find Receiver" component={Transfer} />
        <Drawer.Screen name="Topup" component={Topup} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </>
  );
};

export default Dashboard;
