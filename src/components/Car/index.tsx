import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import GasolineSvg from '../../assets/gasoline.svg';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { Car as ModelCar } from '../../database/model/Car';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CardImage,
} from './styles';
import { useNetInfo } from '@react-native-community/netinfo';

interface Props extends TouchableOpacityProps {
  data: ModelCar;
}

export const Car = ({ data, ...rest }: Props) => {
  const netInfo = useNetInfo();

  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${
              netInfo.isConnected === true ? data.price : '...'
            }`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CardImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode='contain'
      />
    </Container>
  );
};
