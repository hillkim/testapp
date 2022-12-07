import React from 'react';
import {Text, Button, Image} from 'react-native';
import {AppNavigationProp, MainRoutes} from '../../navigation';
import {PageContainer} from '../../components';
import {faker} from '@faker-js/faker';
import {percentageHeight, width} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {RandomIcon} from '../../components/Card';

type ViewScreenProps = {
  navigation: AppNavigationProp<MainRoutes.ItemView>;
};

const ViewScreen = ({navigation}: ViewScreenProps): React.ReactElement => (
  <PageContainer>
    <ScrollView>
      <Image
        source={{uri: faker.image.abstract(1000, 1000, true)}}
        style={{width: width, height: percentageHeight(50)}}
      />
      <RandomIcon />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
        }}>
        Description
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: '#ccc',
          margin: 10,
        }}>
        {faker.lorem.paragraphs(3)}
      </Text>
      {/* Other pictures  */}
      {Array.from({length: 5}).map((_, index) => (
        <Image
          key={index}
          source={{uri: faker.image.abstract(1000, 1000, true)}}
          style={{
            width,
            height: percentageHeight(50),
            borderWidth: 1,
            borderColor: '#ccc',
            flex: 1,
          }}
        />
      ))}
    </ScrollView>
    <Button title="back" onPress={() => navigation.goBack()} />
  </PageContainer>
);

export default ViewScreen;
