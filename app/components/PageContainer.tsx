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

const StyledPage = styled.View`
  flex: 1;
  margin-top: 400px;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export default DefaultPage;