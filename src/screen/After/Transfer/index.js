import React from 'react';
import {View, TextInput, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {GetProfileName} from './../../../redux/actions/Users';
const Transfer = ({navigation}) => {
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const {dataName} = useSelector((s) => s.Users);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    dispatch(
      GetProfileName({
        name: query,
        token: Auth.data.token,
      }),
    );
  }, [query]);

  const fetchMoreData = () => {
    const newData = [...p, ...generateRandomData(5)];

    SetP(newData)
  }


  return dataName == null ? (
    <>
      <View />
    </>
  ) : (
    <>
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <View>

          <Card.Content
            style={{
              flexDirection: 'row',
              backgroundColor: 'rgba(58, 61, 66, 0.1)',
              elevation: 5,
              width: '95%',
              alignSelf: 'center',
              borderRadius: 15,
              marginTop: 25,
              marginBottom: 20,
            }}>
            <View>
              <Icon
                style={{top: 13, right: 4}}
                name="search"
                size={20}
                color="rgba(58, 61, 66, 1)"
              />
            </View>
            <View style={{flex: 5}}>
              <TextInput
                onChangeText={(text) => setQuery(text)}
                placeholder="Search receiver here"
              />
            </View>
          </Card.Content>

          <Text style={{marginLeft: 15, marginTop: 30, fontSize: 15}}>
            All Contacts
          </Text>

          <ScrollView>
            {!dataName ? (
              <View />
            ) : (
              dataName.map((item) => (
                <View style={{marginTop: '3%', marginBottom: '3%'}}>
                  <Card
                    onPress={() =>
                      navigation.navigate('Transfer', {id: item.id_profile})
                    }
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

                              item.photo ? 
                              ('http://192.168.43.216:8000/images/' + item.photo) 
                              : ('https://www.vhv.rs/dpng/d/312-3120300_default-profile-hd-png-download.png')

                            }}
                            style={{width: 50, height: 50, borderRadius: 15}}
                          />
                        </View>

                        <View style={{flex: 1, marginLeft: 15, marginTop: 5}}>
                          <Text>{item.name}</Text>
                          <Text style={{color: '#7A7886'}}>
                            {item.phone ? item.phone : '+62'}
                          </Text>
                        </View>
                      </View>
                    </Card.Content>
                  </Card>
                </View>
              ))
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default Transfer;
