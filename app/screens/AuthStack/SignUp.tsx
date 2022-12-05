import React, {useCallback} from 'react';
import {Text, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {AppNavigationProp, MainRoutes} from '../../navigation';
import {
  useReduxDispatch,
  useReduxSelector,
  attemptSignUp,
  resetLogin,
  selectLogin,
} from '../../redux';

import {UserForm, PageContainer} from '../../components';

type SignUpScreenProps = {
  navigation: AppNavigationProp<MainRoutes.SignUp>;
};
const SignUpScreen = ({navigation}: SignUpScreenProps): React.ReactElement => {
  const dispatch = useReduxDispatch();
  const isLoggedIn = useReduxSelector(selectLogin);

  useFocusEffect(
    useCallback(() => {
      if (isLoggedIn) {
        navigation.navigate(MainRoutes.AppLoading);
      }
    }, [navigation, isLoggedIn]),
  );

  const handleSubmit = (email: string, password: string): void => {
    dispatch(attemptSignUp(email, password));
  };

  const handleSwitch = (): void => {
    dispatch(resetLogin());
    navigation.navigate(MainRoutes.SignIn);
  };

  return (
    <PageContainer>
      <Text>Sign Up</Text>
      <UserForm submitHandler={handleSubmit} label="Sign Up" />
      <Button title="Sign In" onPress={handleSwitch} />
    </PageContainer>
  );
};

export default SignUpScreen;
