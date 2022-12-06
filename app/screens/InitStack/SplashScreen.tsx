import React, {useCallback} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {faker} from '@faker-js/faker';
import styled from 'styled-components/native';
import {AppNavigationProp, MainRoutes} from '../../navigation';
import {PageContainer} from '../../components';

type SplashScreenProps = {
  navigation: AppNavigationProp<MainRoutes.Splash>;
};

const SplashScreen = ({navigation}: SplashScreenProps): React.ReactElement => {
  const navigate = useCallback(
    () => navigation.navigate(MainRoutes.AppCheck),
    [navigation],
  );

  useFocusEffect(
    useCallback(() => {
      const navigationTimer = setTimeout(() => {
        navigate();
      }, 3000);

      return (): void => clearTimeout(navigationTimer);
    }, [navigate]),
  );

  return (
    <TouchableWithoutFeedback onPress={() => navigate()}>
      <PageContainer>
        <BackgroundImage source={{uri: faker.image.abstract(400, 400, true)}} />
      </PageContainer>
    </TouchableWithoutFeedback>
  );
};

const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default SplashScreen;
