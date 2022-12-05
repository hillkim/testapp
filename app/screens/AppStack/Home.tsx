import React from 'react';
import {Text, Button} from 'react-native';
import {AppNavigationProp, MainRoutes} from '../../navigation';
import {useReduxDispatch, setLogout} from '../../redux';
import {PageContainer} from '../../components';

type HomeScreenProps = {
  navigation: AppNavigationProp<MainRoutes.Home>;
};
const HomeScreen = ({navigation}: HomeScreenProps): React.ReactElement => {
  const dispatch = useReduxDispatch();
  const logoutHandler = () => dispatch(setLogout());

  return (
    <PageContainer>
      <Text>HOME</Text>
      <Button title="logout" onPress={() => logoutHandler()} />
      <Button
        title="settings"
        onPress={() => navigation.navigate(MainRoutes.Settings)}
      />
    </PageContainer>
  );
};

export default HomeScreen;
