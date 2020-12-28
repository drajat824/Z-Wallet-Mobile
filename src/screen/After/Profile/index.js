import React from 'react';
import {View, Image, Switch} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  GetProfile,
  setImage,
  ProfileLogout,
} from './../../../redux/actions/Users';
import {LogoutDevice, AuthLogout} from '../../../redux/actions/Auth';
import {TransferLogout} from '../../../redux/actions/Transfer';
import {IMAGE} from '@env';
import ImagePicker from 'react-native-image-picker';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const toggle = React.useState(false);
  const {myData, dataImage} = useSelector((s) => s.Users);

  const [uri, SetUri] = React.useState(null);
  const [name, SetName] = React.useState(null);
  const [type, SetType] = React.useState(null);

  const options = {
    title: 'Change Photo',
    launchCamera: 'Open Camera',
    chooseFromLibraryButtonTitle: 'Choose from library',
  };

  const onLogout = async () => {
    await dispatch(
      LogoutDevice({
        token: Auth.data.token,
      }),
    );
    dispatch(AuthLogout());
    // // dispatch(ProfileLogout());
    // // dispatch(TransferLogout());
  };

  const clickEdit = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      } else {
        SetUri(response.uri);
        SetName(response.fileName);
        SetType(response.type);
      }
    });
  };

  React.useEffect(() => {
    dispatch(
      GetProfile({
        token: Auth.data.token,
      }),
    );
  }, [dataImage]);

  const submit = () => {
    if (uri == null) {
      ToastAndroid.show('Image not found ', ToastAndroid.SHORT);
    } else {
      const data = new FormData();
      data.append('image', {
        uri: uri,
        name: name,
        type: type,
      });
      dispatch(
        setImage({
          token: Auth.data.token,
          data,
        }),
      );
    }
  };

  return (
    <>
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <View>
          <View style={{alignSelf: 'center', marginTop: 20}}>
            <Image
              source={{
                uri: myData ? (
                  myData.data[0].photo ? (
                    `${IMAGE}` + myData.data[0].photo
                  ) : (
                    'https://www.vhv.rs/dpng/d/312-3120300_default-profile-hd-png-download.png'
                  )
                ) : (
                  <View />
                ),
              }}
              style={{width: 70, height: 70, borderRadius: 20}}
            />
          </View>

          <Text
            onPress={() => {
              clickEdit();
            }}
            style={{
              textAlign: 'center',
              marginTop: 5,
              marginBottom: 5,
              color: '#7A7886',
            }}>
            Edit
          </Text>
          <Text
            onPress={() => submit()}
            style={{textAlign: 'center', color: '#7A7886'}}>
            Submit Changes
          </Text>

          {!myData ? (
            <View />
          ) : (
            <Text
              style={{
                textAlign: 'center',
                marginTop: 15,
                fontSize: 15,
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              {myData.data[0].name}
            </Text>
          )}
          {!myData ? (
            <View />
          ) : (
            <Text
              style={{textAlign: 'center', color: '#7A7886', marginTop: 10}}>
              {myData.data[0].phone ? myData.data[0].phone : ''}
            </Text>
          )}

          <View>
            <Card
              onPress={() => navigation.push('Personal Information')}
              style={{
                backgroundColor: '#E5E8ED',
                width: '95%',
                alignSelf: 'center',
                height: 70,
                borderRadius: 15,
                marginTop: 20,
                marginBottom: 20,
              }}>
              <Card.Content
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      top: '20%',
                      marginRight: 20,
                    }}>
                    Personal Information
                  </Text>
                </View>
                <View>
                  <Image
                    style={{width: 30, height: 30, marginTop: 7}}
                    source={require('./../../../../images/arrow-left.png')}
                  />
                </View>
              </Card.Content>
            </Card>

            <Card
              onPress={() => navigation.push('Change Password')}
              style={{
                backgroundColor: '#E5E8ED',
                width: '95%',
                alignSelf: 'center',
                height: 70,
                borderRadius: 15,
                marginBottom: 20,
              }}>
              <Card.Content
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      top: '20%',
                      marginRight: 20,
                    }}>
                    Change Password
                  </Text>
                </View>
                <View>
                  <Image
                    style={{width: 30, height: 30, marginTop: 7}}
                    source={require('./../../../../images/arrow-left.png')}
                  />
                </View>
              </Card.Content>
            </Card>

            <Card
              onPress={() => navigation.push('Change Pin')}
              style={{
                backgroundColor: '#E5E8ED',
                width: '95%',
                alignSelf: 'center',
                height: 70,
                borderRadius: 15,
                marginBottom: 20,
              }}>
              <Card.Content
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      top: '20%',
                      marginRight: 20,
                    }}>
                    Change Pin
                  </Text>
                </View>
                <View>
                  <Image
                    style={{width: 30, height: 30, marginTop: 7}}
                    source={require('./../../../../images/arrow-left.png')}
                  />
                </View>
              </Card.Content>
            </Card>

            <Card
              style={{
                backgroundColor: '#E5E8ED',
                width: '95%',
                alignSelf: 'center',
                height: 70,
                borderRadius: 15,
                marginBottom: 20,
              }}>
              <Card.Content
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      top: '20%',
                      marginRight: 20,
                    }}>
                    Notification
                  </Text>
                </View>
                <View>
                  <Switch
                    thumbColor="white"
                    trackColor={{false: 'black', true: '#6379F4'}}
                    value={toggle}
                  />
                </View>
              </Card.Content>
            </Card>

            <Card
              onPress={() => onLogout()}
              style={{
                backgroundColor: '#E5E8ED',
                width: '95%',
                alignSelf: 'center',
                height: 70,
                borderRadius: 15,
                marginBottom: 20,
              }}>
              <Card.Content
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      top: '20%',
                      marginRight: 20,
                    }}>
                    Logout
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
