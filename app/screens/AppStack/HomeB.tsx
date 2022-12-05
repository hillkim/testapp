import React from 'react';
import {Text, Button} from 'react-native';
import {AppNavigationProp, MainRoutes} from '../../navigation';
import {PageContainer} from '../../components';

type HomeScreenProps = {
  navigation: AppNavigationProp<MainRoutes.Home>;
};
const HomeScreenB = ({navigation}: HomeScreenProps): React.ReactElement => (
  <PageContainer>
    <Text>Seection B</Text>
    <Button
      title="settings"
      onPress={() => navigation.navigate(MainRoutes.Settings)}
    />
  </PageContainer>
);

export default HomeScreenB;
