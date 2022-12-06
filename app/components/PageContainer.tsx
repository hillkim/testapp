import React, {type PropsWithChildren} from 'react';
// @ts-ignore
import styled from 'styled-components/native';

export type DefaultPageProps = {
  children: React.ReactNode;
};

const DefaultPage: React.FC<PropsWithChildren<DefaultPageProps>> = ({
  children,
}: PropsWithChildren<DefaultPageProps>): React.ReactElement => (
  <StyledPage>{children}</StyledPage>
);

const StyledPage = styled.SafeAreaView`
  background-color: #fff;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default DefaultPage;
