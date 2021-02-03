import React from "react";
import { Container, Top, Logo, Title } from "./styles";
import logoNubank from "../../assets/Nubank_Logo.png";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logoNubank} />
        <Title>Rodolfo</Title>
      </Top>
        <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}
