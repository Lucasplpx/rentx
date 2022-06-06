import React from 'react';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from './styles';
import { Button } from '../../components/Button';

export const CarDetails = () => {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            'https://e7.pngegg.com/pngimages/707/596/png-clipart-2015-audi-a3-car-2016-audi-a3-mercedes-benz-cla-class-audi-compact-car-sedan.png',
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Acessories>
          <Acessory name='38Km/h' icon={speedSvg} />
          <Acessory name='3.2s' icon={accelerationSvg} />
          <Acessory name='800 HP' icon={forceSvg} />
          <Acessory name='Gasoline' icon={gasolineSvg} />
          <Acessory name='Auto' icon={exchangeSvg} />
          <Acessory name='2 pessoas' icon={peopleSvg} />
        </Acessories>

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          perferendis laudantium quisquam aspernatur quo tenetur, vel quibusdam
          rem porro quod eos maiores odit in dolorem fugit minus libero! Itaque,
          accusamus!
        </About>
      </Content>

      <Footer>
        <Button title='Confirmar' />
      </Footer>
    </Container>
  );
};
