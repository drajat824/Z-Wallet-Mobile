import React from 'react';
import {View, Image, Switch} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Card, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {GetProfile, setImage} from './../../../redux/actions/Users';
import {AuthLogout} from '../../../redux/actions/Auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import {ToastAndroid} from 'react-native';

const Profile = ({navigation}) => {

  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const toggle = React.useState(false);
  const {myData, dataImage} = useSelector((s) => s.Users);
  // const {photo} = myData.data[0]
  var [uri, SetUri] = React.useState(null)
  var [name, SetName] = React.useState(null)
  var [type, SetType] = React.useState(null)


  const options = {
    title: 'Change Photo',
    launchCamera: 'Open Camera',
    chooseFromLibraryButtonTitle: 'Choose from library',
  };

  const onPress = (value) => {
    alert('Ini toggle');
  };

  const onLogout = () => {
    dispatch(AuthLogout());
  };

  const clickEdit = () => {

    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      } else {
        
        SetUri(response.uri)
        SetName(response.fileName)
        SetType(response.type)

      }
    })

  }

  React.useEffect(() => {
    dispatch(
      GetProfile({
        token: Auth.data.token,
      }),
    );
  }, [dataImage]);

  const submit = () => {

    if(uri == null ) {
      ToastAndroid.show('Image not found ', ToastAndroid.SHORT);
    } else {
    
    const data = new FormData();
    data.append('image', {
      uri: uri,
      name: name,
      type: type
  })
    dispatch(
      setImage({
        token: Auth.data.token,
        data,
      })
    )
    }
}

  return (
    <>
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <View>
          <View style={{alignSelf: 'center', marginTop: 20}}>
            <Image
              source={{
                uri: myData ? (
                  myData.data[0].photo ? (
                    'http://192.168.43.216:8000/images/' + myData.data[0].photo
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

          <Text onPress={() => clickEdit()} style={{textAlign: 'center', marginTop: 5, marginBottom: 5, color: '#7A7886'}}>Edit</Text>
          <Text onPress={() => submit()} style={{textAlign: 'center', color: '#7A7886'}}>Submit Changes</Text>

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
              {myData.data[0].phone? (myData.data[0].phone) : ("+62")}
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
                    style={{width: 50, marginTop: 7}}
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
                    style={{width: 50, marginTop: 7}}
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
                    style={{width: 50, marginTop: 7}}
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
                    onValueChange={(value) => onPress({toggle: value})}
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
