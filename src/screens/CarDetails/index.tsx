import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import {
  Container,
  Header,
  CarImages,
  Brand,
  Content,
  Description,
  Details,
  Name,
  Period,
  Price,
  Rent,
} from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://img3.gratispng.com/dy/8f95649810232d4c055c7605e174f092/L0KzQYm3U8MyN5NufZH0aYP2gLBuTcIxOWgyeedtaT3kSH65UME5NZJ6fNs2c0iwQoG4V71ifZVuReUDLXPkgn7olfRqNWZmetg8Y3O4Rba4WMcxNmE8Sqs8MEK1QYa5UsQ5OmQ8S6UDNUSxgLBu/kisspng-2017-audi-a8-2018-audi-s8-2017-audi-s8-car-audi-5abf3cc55e1870.0729302215224823733854.png",
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
      </Content>
    </Container>
  );
}
