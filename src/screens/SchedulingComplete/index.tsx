import React from "react";
import { useWindowDimensions } from "react-native";

import { Container, Content, Message, Title, Footer } from "./styles";
import LogoSvg from "../../assets/icons/logo_background_gray.svg";
import DoneSvg from "../../assets/icons/done.svg";
import { StatusBar } from "react-native";
import { ConfirmButton } from "../../components/ConfirmButton";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu automóvel.
        </Message>

        <Footer>
          <ConfirmButton title="OK" />
        </Footer>
      </Content>
    </Container>
  );
}
