import React, {useCallback} from 'react';
import {Text, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {AppNavigationProp, MainRoutes} from '../../navigation';
import {
  useReduxDispatch,
  useReduxSelector,
  attemptLogin,
  resetLogin,
  selectLogin,
} from '../../redux';

import {UserForm, PageContainer} from '../../components';

type SignInScreenProps = {
  navigation: AppNavigationProp<MainRoutes.SignIn>;
};

const SignInScreen = ({navigation}: SignInScreenProps): React.ReactElement => {
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
    dispatch(attemptLogin(email, password));
  };

  const handleSwitch = (): void => {
    dispatch(resetLogin());
    navigation.navigate(MainRoutes.SignUp);
  };

  return (
    <PageContainer>
      <Text>Sign In</Text>
      <UserForm submitHandler={handleSubmit} label="Log in" />
      <Button title="Sign Up" onPress={handleSwitch} />
    </PageContainer>
  );
};

export default SignInScreen;
