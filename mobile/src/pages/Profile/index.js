import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { WhiteBackground } from '~/components/Backgrounds';

import { signOut } from '~/store/modules/auth/action';

import {
  Container,
  Avatar,
  Info,
  InfoTitle,
  InfoText,
  LogoutButton,
} from './styles';

export default function Profile() {
  const deliveryman = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <WhiteBackground>
        <Container>
          <Avatar url={deliveryman.avatar?.path} name={deliveryman.name} />
          <Info>
            <InfoTitle>Nome completo</InfoTitle>
            <InfoText>{deliveryman.name}</InfoText>
          </Info>
          <Info>
            <InfoTitle>Email</InfoTitle>
            <InfoText>{deliveryman.email}</InfoText>
          </Info>
          <Info>
            <InfoTitle>Data de cadastro</InfoTitle>
            <InfoText>{deliveryman.createdAt}</InfoText>
          </Info>
          <LogoutButton onPress={() => dispatch(signOut())}>
            Logout
          </LogoutButton>
        </Container>
      </WhiteBackground>
    </>
  );
}
