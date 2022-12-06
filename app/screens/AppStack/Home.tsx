import React from 'react';
import {ScrollView, View} from 'react-native';

import {AppNavigationProp, MainRoutes} from '../../navigation';
import {Card, CardList, PageContainer} from '../../components';
import {percentageHeight, width} from '../../utils';
import {faker} from '@faker-js/faker';
type HomeScreenProps = {
  navigation: AppNavigationProp<MainRoutes.Home>;
};

const HomeScreen = ({navigation}: HomeScreenProps): React.ReactElement => {
  const [data, setData] = React.useState<any>(
    Array.from({length: 10}, (v, k) => k).map(_item => {
      return {
        id: faker.datatype.uuid(),
        title: faker.address.city(),
        description: faker.company.catchPhrase(),
        featuredImage: faker.image.abstract(400, 400, true),
      };
    }),
  );

  return (
    <PageContainer>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width,
        }}>
        <ScrollView>
          <Card
            title={faker.address.city()}
            onPress={() => navigation.navigate(MainRoutes.ItemView)}
            width={width - 30}
            height={percentageHeight(50)}
            description="Lorem ipsum dolor sit amet."
            FeaturedImageURL={{
              uri: faker.image.abstract(400, 400, true),
            }}
          />

          <CardList
            data={data}
            title="Featured Cities"
            renderItem={({item}: any) => {
              return (
                <Card
                  title={item.title}
                  onPress={() => {
                    navigation.navigate(MainRoutes.ItemView);
                    console.log('pressed');
                  }}
                  width={width - 40}
                  height={percentageHeight(50)}
                  description={item.description}
                  FeaturedImageURL={{
                    uri: item.featuredImage,
                  }}
                />
              );
            }}
            onEndReached={() =>
              setData([
                ...data,
                ...Array.from({length: 10}, (v, k) => k).map(_item => {
                  return {
                    id: faker.datatype.uuid(),
                    title: faker.address.city(),
                    description: faker.company.catchPhrase(),
                    featuredImage: faker.image.abstract(400, 400, true),
                  };
                }),
              ])
            }
          />
        </ScrollView>
      </View>
    </PageContainer>
  );
};

export default HomeScreen;
