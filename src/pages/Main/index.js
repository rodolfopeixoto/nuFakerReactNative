import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import {
  Container,
  CardHeader,
  Content,
  Card,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from "./styles";
import Menu from "../../components/Menu";

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <MaterialIcons name="attach-money" size={28} color="#666" />
            <MaterialIcons name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$1.030.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de 1.030.611,65 recebida de Diego Schell Fernandes hoje
              às 06:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
