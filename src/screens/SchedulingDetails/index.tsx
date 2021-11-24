import React from "react";
import { Feather } from "@expo/vector-icons";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import speedSvg from "../../assets/icons/speed.svg";
import accelerationSvg from "../../assets/icons/acceleration.svg";
import forceSvg from "../../assets/icons/force.svg";
import gasolineSvg from "../../assets/icons/gasoline.svg";
import exchangeSvg from "../../assets/icons/exchange.svg";
import peopleSvg from "../../assets/icons/people.svg";

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
  About,
  Accessories,
  Footer,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPeriod,
  RentalPrice,
  RentalPriceDatails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

export function SchedulingDetails({ navigation }) {
  const theme = useTheme();

  const handleNavigateToSchedulingComplete = () => {
    navigation.navigate("SchedulingComplete");
  };
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
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

        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 Pessoas" icon={peopleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.title}
          />
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDatails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDatails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          onPress={handleNavigateToSchedulingComplete}
        />
      </Footer>
    </Container>
  );
}
