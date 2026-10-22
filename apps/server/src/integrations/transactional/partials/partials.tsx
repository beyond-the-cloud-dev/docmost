import { button as buttonStyle, container, footer, footerText, headerSection, logo, logoImage, main } from '../css/styles';
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
} from 'react-email';
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

interface EmailButtonProps {
  href: string;
  children: React.ReactNode;
}

export function EmailButton({ href, children }: EmailButtonProps) {
  return (
    <table
      role="presentation"
      cellPadding="0"
      cellSpacing="0"
      style={{ margin: '0 0 15px 15px' }}
    >
      <tr>
        <td
          style={{
            backgroundColor: buttonStyle.backgroundColor,
            borderRadius: buttonStyle.borderRadius,
            textAlign: 'center' as const,
          }}
        >
          <a
            href={href}
            target="_blank"
            style={{
              color: buttonStyle.color,
              fontFamily: buttonStyle.fontFamily,
              fontSize: buttonStyle.fontSize,
              textDecoration: 'none',
              display: 'inline-block',
              padding: '8px 16px',
            }}
          >
            {children}
          </a>
        </td>
      </tr>
    </table>
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

export function getGreetingName(name?: string): string {
  return name?.split(' ')[0] || 'there';
}
