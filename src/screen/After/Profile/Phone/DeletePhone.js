import React from 'react';
import {View, Image, Switch, StatusBar} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Text, Card, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DelPhone} from './../../../../redux/actions/Users';
import {useDispatch, useSelector} from 'react-redux';
import LoadingComponent from './../.././../../component/loading';

const DeletePhone = (props) => {
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const {myData, loading} = useSelector((s) => s.Users);
  const Delete = () => {
    dispatch(
      DelPhone(
        {
          token: Auth.data.token,
        },
        props.navigation,
      ),
    );
  };

  return loading ? (
    <>
      <StatusBar backgroundColor="#fafcff" barStyle="dark-content" />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <LoadingComponent />
      </View>
    </>
  ) : (
    <>
      <StatusBar backgroundColor="#fafcff" barStyle="dark-content" />
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <View>
          <Text style={{color: '#7A7886', marginLeft: 15, marginTop: 30}}>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </Text>

          <View>
            <Card
              style={{
                elevation: 5,
                backgroundColor: 'white',
                width: '95%',
                alignSelf: 'center',
                height: 90,
                borderRadius: 15,
                marginTop: 20,
                marginBottom: 20,
              }}>
              <Card.Content
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                    <Text style={{color: '#7A7886'}}>Primary</Text>
                    <Text
                      style={{
                        color: '#514F5B',
                        fontWeight: 'bold',
                        fontSize: 25,
                      }}>
                      {myData.data[0].phone ? myData.data[0].phone : ''}
                    </Text>
                  </View>

                  <TouchableOpacity style={{marginTop: 20, marginRight: 5}}>
                    <Icon onPress={() => Delete()} name="trash" size={20} />
                  </TouchableOpacity>
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default DeletePhone;
