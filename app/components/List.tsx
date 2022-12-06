import React from 'react';
import {Text, View} from 'react-native';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {COLORS, percentageHeight} from '../utils';

const Header = ({title = 'Other Cities'}: {title: string}) => {
  return (
    <View
      style={{backgroundColor: 'white', padding: 8, alignSelf: 'flex-start'}}>
      <Text
        style={{
          color: COLORS.black,
          fontSize: 24,
          fontWeight: '700',
          padding: 8,
        }}>
        {title}
      </Text>
    </View>
  );
};

type ListProps = {
  renderItem: ListRenderItem<any>;
  onEndReached?: () => void;
  data: any[];
  title: string;
};

const List = ({renderItem, onEndReached, data, title}: ListProps) => {
  return (
    <>
      <Header title={title} />
      <FlashList
        renderItem={renderItem}
        keyExtractor={(item: any) => {
          return item.id;
        }}
        estimatedItemSize={50}
        style={{
          marginVertical: 10,
          marginHorizontal: 20,
          maxHeight: percentageHeight(50),
        }}
        horizontal={true}
        data={data}
        onEndReached={onEndReached}
        snapToAlignment="center"
        onEndReachedThreshold={0.5}
      />
    </>
  );
};

export default List;
