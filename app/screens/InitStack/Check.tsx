import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import styled from 'styled-components/native';
import {AppNavigationProp, MainRoutes} from '../../navigation';
import {useReduxSelector, selectLogin} from '../../redux';

import {useInterval} from '../../hooks';
import {PageContainer} from '../../components';

type AppCheckScreenProps = {
  navigation: AppNavigationProp<MainRoutes.AppCheck>;
};

const AppCheckScreen = ({
  navigation,
}: AppCheckScreenProps): React.ReactElement => {
  const [count, setCount] = useState(0);
  const isLoggedIn = useReduxSelector(selectLogin);

  const getRoute = useCallback(
    () => (isLoggedIn ? MainRoutes.AppLoading : MainRoutes.SignIn),
    [isLoggedIn],
  );

  useInterval(() => {
    if (count < 200) {
      setCount(count + 1);
    }
    if (count >= 200) {
      setCount(0);
    }
  }, 10);

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        navigation.navigate(getRoute());
      }, 1500);
    }, [navigation, getRoute]),
  );

  return (
    <PageContainer>
      <Text>Loading App Data ...</Text>
      <StyledLoadingBar>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            backgroundColor: '#ff7100',
            left: `${count - Math.min(count, 100)}%`,
            right: `${100 - Math.min(count, 100)}%`,
          }}
        />
      </StyledLoadingBar>
    </PageContainer>
  );
};

const StyledLoadingBar = styled(View)`
  height: 20px;
  margin-top: 20px;
  width: 300px;
  background-color: white;
  border-color: #000;
  border-width: 2px;
  border-radius: 5px;
`;

export default AppCheckScreen;
