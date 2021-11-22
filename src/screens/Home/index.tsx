import React from "react";
import { StatusBar } from "expo-status-bar";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import Logo from "../../assets/icons/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car/Index";

export function Home() {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://img3.gratispng.com/dy/8f95649810232d4c055c7605e174f092/L0KzQYm3U8MyN5NufZH0aYP2gLBuTcIxOWgyeedtaT3kSH65UME5NZJ6fNs2c0iwQoG4V71ifZVuReUDLXPkgn7olfRqNWZmetg8Y3O4Rba4WMcxNmE8Sqs8MEK1QYa5UsQ5OmQ8S6UDNUSxgLBu/kisspng-2017-audi-a8-2018-audi-s8-2017-audi-s8-car-audi-5abf3cc55e1870.0729302215224823733854.png",
  };
  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Header>
          <HeaderContent>
            <Logo width={RFValue(108)} height={RFValue(12)} />

            <TotalCars>Total de 12 carros</TotalCars>
          </HeaderContent>
        </Header>
        <CarList
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <Car data={carData} />}
        />
      </Container>
    </>
  );
}
