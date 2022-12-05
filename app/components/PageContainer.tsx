import React, {type PropsWithChildren} from 'react';
// @ts-ignore
import styled from 'styled-components/native';

export type DefaultPageProps = {
  children: React.ReactNode;
};

const DefaultPage: React.FC<
  PropsWithChildren<{
    children: React.ReactNode;
  }>
> = ({children}: DefaultPageProps): React.ReactElement => (
  <StyledPage>{children}</StyledPage>
);

const StyledPage = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default DefaultPage;
