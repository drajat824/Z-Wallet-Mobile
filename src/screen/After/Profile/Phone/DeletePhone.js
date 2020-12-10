import React from 'react';
import {View, Image, Switch} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const DeletePhone = ({navigation}) => {
  const toggle = React.useState(false);

  const onPress = (value) => {
    alert('Ini toggle');
  };

  return (
    <>
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
                      089234234
                    </Text>
                  </View>

                  <View style={{marginTop: 10, marginRight: 5}}>
                    <Icon
                      onPress={() => navigation.push('Add Phone Number')}
                      name="trash"
                    />
                  </View>
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
