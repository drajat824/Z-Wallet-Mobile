import * as React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

const LoadingComponent = () => (
  <ActivityIndicator animating={true} color={Colors.blue700} size={'large'} />
);

export default LoadingComponent;
