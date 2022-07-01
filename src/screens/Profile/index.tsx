import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
} from './styles';

export const Profile = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleSinOut() {}

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton color={theme.colors.shape} onPress={handleBack} />
          <HeaderTitle>Editar Perfil</HeaderTitle>

          <LogoutButton onPress={handleSinOut}>
            <Feather name='power' size={24} color={theme.colors.shape} />
          </LogoutButton>
        </HeaderTop>
        <PhotoContainer>
          <Photo
            source={{
              uri: 'https://avatars.githubusercontent.com/u/35532721?v=4',
            }}
          />

          <PhotoButton onPress={handleSinOut}>
            <Feather name='camera' size={24} color={theme.colors.shape} />
          </PhotoButton>
        </PhotoContainer>
      </Header>
    </Container>
  );
};
