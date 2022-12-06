import React from 'react';
import {Text, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {faker} from '@faker-js/faker';
import {AppNavigationProp, MainRoutes} from '../../navigation';
import {PageContainer} from '../../components';
import {percentageWidth} from '../../utils';
import {setLogout, useReduxDispatch} from '../../redux';

type HomeScreenProps = {
  navigation: AppNavigationProp<MainRoutes.Home>;
};
const ProfileScreem = ({}: HomeScreenProps): React.ReactElement => {
  const dispatch = useReduxDispatch();
  const logoutHandler = () => dispatch(setLogout());
  return (
    <PageContainer>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <Image
          style={styles.profileImage}
          source={{uri: faker.internet.avatar()}}
        />
        {/* Information */}
        {/* Name */}
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {faker.name.firstName()} {faker.name.lastName()}
        </Text>
        {/* Email */}
        <Text style={{fontSize: 15, color: '#ccc', margin: 10}}>
          {faker.internet.email()}
        </Text>
        {/* Bio */}
        <Text style={{fontSize: 15, color: '#ccc', margin: 10}}>
          {faker.lorem.paragraph()}
        </Text>
        {/* Information */}

        {/* Buttons */}

        <Button title="logout" onPress={() => logoutHandler()} />
      </ScrollView>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: percentageWidth(50),
    height: percentageWidth(50),
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#ccc',
    margin: 10,
  },
});

export default ProfileScreem;
