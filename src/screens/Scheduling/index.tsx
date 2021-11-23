import React from "react";
import { BackButton } from "../../components/BackButton";

import ArrowSvg from "../../assets/icons/arrow.svg";
import {
  Container,
  DateInfo,
  DateTitle,
  DateValue,
  Header,
  RentalPeriod,
  Title,
  Content,
  Footer,
} from "./styles";
import { useTheme } from "styled-components";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";

export function Scheduling() {
  const theme = useTheme();
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Container>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Header>
          <BackButton color={theme.colors.shape} onPress={() => {}} />

          <Title>
            Escolha uma{"\n"}data de início e {"\n"}fim do aluguel
          </Title>

          <RentalPeriod>
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue selected={true}>18/06/2021</DateValue>
            </DateInfo>
            <ArrowSvg />
            <DateInfo>
              <DateTitle>ATÉ</DateTitle>
              <DateValue selected={true}>18/06/2021</DateValue>
            </DateInfo>
          </RentalPeriod>
        </Header>

        <Content></Content>

        <Footer>
          <Button title="Confirmar" />
        </Footer>
      </Container>
    </>
  );
}
