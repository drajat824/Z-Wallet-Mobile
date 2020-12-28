import * as React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

const LoadingComponentSub = () => (
  <ActivityIndicator animating={true} color={Colors.blue500} size={'small'} />
);

export default LoadingComponentSub;
