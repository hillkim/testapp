import React from 'react';
import {Text, Button} from 'react-native';
import {AppNavigationProp, MainRoutes} from '../../navigation';
import {PageContainer, Settings} from '../../components';

type SettingsScreenProps = {
  navigation: AppNavigationProp<MainRoutes.Settings>;
};

const SettingsScreen = ({
  navigation,
}: SettingsScreenProps): React.ReactElement => (
  <PageContainer>
    <Text>SETTINGS</Text>
    <Settings />
    <Button title="back" onPress={() => navigation.goBack()} />
  </PageContainer>
);

export default SettingsScreen;
