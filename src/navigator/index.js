import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import {
  Login,
  Dashboard,
  Register,
  ForgotEmail,
  ForgotPassword,
  Pin,
  Transaction,
  Topup,
  Profile,
  Personal,
  ChangePw,
  ChangePin,
  AddPhone,
  DeletePhone,
  TrHistory,
  Transfer,
  AdminDashboard,
  AdminTopup,
  Confirm,
  Input,
  PinConfirm,
  Status,
  Success,
} from '../screen';
import 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const HomeStack = () => {
  const Auth = useSelector((s) => s.Auth);

  const [loading, setLoading] = React.useState(true);
  const [initialRoute, setInitialRoute] = React.useState('Login');

  React.useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          setInitialRoute(initialRoute); // e.g. "Settings"
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      {Auth.data.token == undefined ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Success"
            component={Success}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Pin"
            component={Pin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotEmail"
            component={ForgotEmail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : Auth.data.role == 21 ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Admin Dashboard"
            component={AdminDashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Admin Topup"
            component={AdminTopup}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Find Receiver"
            component={Transfer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Topup"
            component={Topup}
            options={{headerShown: false}}
          />

          <Stack.Screen name="Transfer" component={Input} />
          <Stack.Screen name="Confirmation" component={Confirm} />
          <Stack.Screen name="Enter Your Pin" component={PinConfirm} />
          <Stack.Screen name="Status" component={Status} />

          <Stack.Screen name="Transaction" component={Transaction} />
          <Stack.Screen name="History" component={TrHistory} />
          <Stack.Screen name="Personal Information" component={Personal} />
          <Stack.Screen name="Change Password" component={ChangePw} />
          <Stack.Screen name="Change Pin" component={ChangePin} />
          <Stack.Screen name="Add Phone Number" component={AddPhone} />
          <Stack.Screen name="Manage Phone Number" component={DeletePhone} />
        </Stack.Navigator>
      )}
    </>
  );
};

const MainNavigator = (props) => {
  return (
    <NavigationContainer>
      <HomeStack navigation={props.navigation} />
    </NavigationContainer>
  );
};

export default MainNavigator;
