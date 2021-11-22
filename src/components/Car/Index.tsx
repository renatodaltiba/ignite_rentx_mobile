import React from "react";

import {
  About,
  Brand,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type,
  CarImage,
} from "./styles";
import GasolineSvg from "../../assets/icons/gasoline.svg";

interface Props {
  data: {
    brand: string;
    name: string;
    rent: {
      period: string;
      price: number;
    };
    thumbnail: string;
  };
}

export function Car({ data }: Props) {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{"R$ " + data.rent.price}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
