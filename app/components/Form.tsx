import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';
import {
  useReduxSelector,
  selectIsSubmitting,
  selectLoginMessage,
  selectLoginState,
} from '../redux';

type UserFormProps = {
  submitHandler: (email: string, password: string) => void;
  label: string;
};

export const UserForm = ({
  submitHandler,
  label,
}: UserFormProps): React.ReactElement => {
  const [email, setEmail] = useState('hillary@kimaita.com');
  const [password, setPassword] = useState('$trongP@ssword');

  const isLoading = useReduxSelector(selectIsSubmitting);
  const loginState = useReduxSelector(selectLoginState);
  const loginMessage = useReduxSelector(selectLoginMessage);

  return (
    <StyledContainer error={loginState === 'denied'}>
      <StyledInput
        onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <StyledInput
        onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <StyledButtonContainer
        disabled={isLoading}
        onPress={() => submitHandler(email, password)}>
        <StyledButtonText>{label}</StyledButtonText>
      </StyledButtonContainer>
      {loginMessage && <Text>{loginMessage}</Text>}
    </StyledContainer>
  );
};

const StyledContainer = styled(View)<{error: boolean}>`
    border: 3px solid ${(props: {
      theme: {palette: {interactive: {border: any}}};
    }) => props.theme.palette.interactive.border};
    border-radius: 5px;
    padding: 10px;

    ${(props: {
      error: boolean;
      theme: {
        palette: {
          signal: {red: any; redShade: any};
          interactive: {border: any};
          common: {white: any};
        };
      };
    }) => {
      if (props.error === true) {
        return {
          border: `3px solid ${props.theme.palette.signal.red}`,
          backgroundColor: props.theme.palette.signal.redShade,
        };
      }

      return {
        border: `3px solid ${props.theme.palette.interactive.border}`,
        backgroundColor: props.theme.palette.common.white,
      };
    }};
}
`;

const StyledInput = styled(TextInput)`
  height: 40px;
  width: 300px;
  border-color: grey;
  border-width: 1px;
  background-color: ${(props: {theme: {palette: {common: {white: any}}}}) =>
    props.theme.palette.common.white};
  margin: 10px 0;
  padding: 5px;
`;

const StyledButtonContainer = styled(TouchableOpacity)<{disabled: boolean}>`
  background-color: ${(props: {disabled: any}) =>
    props.disabled ? '#ccc' : '#009688'};
  border-radius: 10px;
  padding: 10px 12px;
`;

const StyledButtonText = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
`;
