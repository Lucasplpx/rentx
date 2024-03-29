import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container } from './styles';
import { useTheme } from 'styled-components';

interface Props extends TouchableOpacityProps {
  color?: string;
}

export const BackButton = ({ color, ...rest }: Props) => {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name='chevron-left'
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
};
