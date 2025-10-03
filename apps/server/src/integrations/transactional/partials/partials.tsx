import { container, footer, footerText, headerSection, logo, logoImage, main } from '../css/styles';
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface MailBodyProps {
  children: React.ReactNode;
}

export function MailBody({ children }: MailBodyProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <MailHeader />
          {children}
        </Container>
        <MailFooter />
      </Body>
    </Html>
  );
}

export function MailHeader() {
  return (
    <Section style={headerSection}>
      <Section style={logo}>
        <Img
          src="https://raw.githubusercontent.com/beyond-the-cloud-dev/.github/main/assets/logo-dark.png"
          alt="Beyond the Cloud"
          style={logoImage}
          draggable={false}
        />
      </Section>
    </Section>
  );
}

export function MailFooter() {
  return (
    <Section style={footer}>
      <Text style={footerText}>
        © {new Date().getFullYear()} Beyond the Cloud. All rights reserved.
      </Text>
    </Section>
  );
}
