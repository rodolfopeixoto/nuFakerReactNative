import React from 'react';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { Container, Code } from './styles';

export default function Menu() {
  return (
    <Container>
    <Code>
      <QRCode
        value="http://nubank.com.br"
        size={80}
        logoBackgroundColor="#FFF"
        backgroundColor="#8810AE"
      />
    </Code>
    </Container>
  )
}
