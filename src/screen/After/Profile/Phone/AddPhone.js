import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {
  Button,
  TextInput,
  Text,
  Card,
  Content,
  Cover,
} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

// const style = StyleSheet.create({

//   bg: {
//     backgroundColor: 'red'
//   }

// })

const AddPhone = ({navigation}) => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [password2, setPassword2] = React.useState(null);
  const [hidePassword, setHidePassword] = React.useState(true);
  const [hidePassword2, setHidePassword2] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  const Auth = useSelector((s) => s.Auth);

  //   const onSubmit = () => {
  //     dispatch(
  //       AuthLogin({
  //         email: email,
  //         password: password,
  //         // history: props.history
  //       })
  //     );
  //   };

  return (
    <>
      <ScrollView style={{backgroundColor: '#fafcff'}}>
        <Card.Content style={{marginTop: 15}}>
          <View>
            <Text
              style={{
                marginBottom: 20,
                color: 'rgba(58, 61, 66, 0.6)',
              }}>
              Add at least one phone number for the transfer ID so you can start
              transfering your money to another user.
            </Text>
          </View>

          <View style={{marginBottom: 350}}>
            <View style={{marginBottom: 30}}>
              <TextInput
                style={{backgroundColor: '#fafcff'}}
                label="Enter your phone number"
                value={password}
                returnKeyType="send"
                onChangeText={(text) => setPassword(text)}
                underlineColorAndroid="#fff"
              />
            </View>
          </View>

          <View>
            <Button
              style={{
                backgroundColor: '#6379F4',
                borderRadius: 12,
                height: 57,
                width: '95%',
                alignSelf: 'center',
                justifyContent: 'center',
              }}
              onPress={() => onSubmit()}
              color="#116242"
              mode="contained"
              disabled={loading}
              loading={loading}>
              Submit
            </Button>
          </View>
        </Card.Content>
      </ScrollView>
    </>
  );
};

export default AddPhone;
