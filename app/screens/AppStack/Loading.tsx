import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {LoaderScreen, Colors} from 'react-native-ui-lib';
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
      <LoaderScreen color={Colors.blue30} message="Loading..." overlay />
    </PageContainer>
  );
};

export default AppLoadingScreen;
