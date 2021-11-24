import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import Logo from "../../assets/icons/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car/Index";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { Loading } from "../../components/Loading";

export function Home({ navigation }) {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  function handleCarDetails() {
    console.log("entrou");
    navigation.navigate("CarDetails");
  }
  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get<CarDTO[]>("/cars");
        setCars(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

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
        {loading ? (
          <Loading />
        ) : (
          <CarList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Car data={item} onPress={handleCarDetails} />
            )}
          />
        )}
      </Container>
    </>
  );
}
