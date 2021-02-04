import React from "react";
import { Text } from "react-native";
import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { QRCode } from 'react-native-custom-qr-codes-expo';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode codeStyle="diamond"
          color="#8B10AE"
          content="http://www.rodolfopeixoto.com.br"
          size={80}

          />
      </Code>
      <Nav>
        <NavItem>
          <MaterialIcons name="help-outline" size={20} color="#fff" />
          <NavText>Me Ajuda</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="credit-card" size={20} color="#fff" />
          <NavText>Configurar Cartão</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name="smartphone" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton
        onPress={ () => {} }
      >
        <SignOutButtonText>Sair do App</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
