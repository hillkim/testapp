import React, {useCallback} from 'react';
import {Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useReduxDispatch, setRunning} from '../../redux';
import {PageContainer} from '../../components';

const AppLoadingScreen = (): React.ReactElement => {
  const dispatch = useReduxDispatch();

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        dispatch(setRunning(true));
      }, 1500);
    }, [dispatch]),
  );

  return (
    <PageContainer>
      <Text>loading User Data...</Text>
    </PageContainer>
  );
};

export default AppLoadingScreen;
