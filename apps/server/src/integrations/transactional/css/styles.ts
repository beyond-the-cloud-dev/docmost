// Beyond the Cloud color palette
export const colors = {
  blue2: '#0092c8',
  blue: '#1c93c8',
  lightBlue: '#80d8fd',
  gray: '#424242',
  darkGray: '#2c2c2c',
  black: '#000000',
  white: '#ffffff',
  lightWhite: '#F9F9F9',
};

export const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

export const main = {
  backgroundColor: colors.lightWhite,
  fontFamily,
  padding: '30px 0',
};

export const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: colors.white,
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
};

export const headerSection = {
  backgroundColor: colors.white,
  padding: '32px 0 24px 0',
  textAlign: 'center' as const,
};

export const content = {
  padding: '32px 40px',
  textAlign: 'center' as const,
};

export const paragraph = {
  fontFamily,
  color: colors.gray,
  lineHeight: '1.6',
  fontSize: '16px',
  margin: '0 0 16px 0',
};

export const h1 = {
  color: colors.darkGray,
  fontFamily,
  fontSize: '28px',
  fontWeight: '600',
  margin: '0 0 24px 0',
  lineHeight: '1.3',
};

export const h2 = {
  color: colors.gray,
  fontFamily,
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 16px 0',
  lineHeight: '1.4',
};

export const logo = {
  textAlign: 'center' as const,
  padding: '0',
};

export const logoImage = {
  height: '60px',
  width: 'auto',
  display: 'block',
  margin: '0 auto',
  pointerEvents: 'none' as const,
  userSelect: 'none' as const,
  cursor: 'default',
};

export const link = {
  color: colors.blue,
  textDecoration: 'none',
  fontWeight: '500',
};

export const footer = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '24px 40px 32px 40px',
};

export const footerText = {
  textAlign: 'center' as const,
  color: colors.gray,
  fontSize: '13px',
  lineHeight: '1.5',
  margin: '0',
};

export const button = {
  backgroundColor: colors.blue,
  borderRadius: '8px',
  color: colors.white,
  fontFamily,
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
  transition: 'background-color 0.2s ease',
};

export const buttonWrapper = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

export const divider = {
  borderTop: `1px solid ${colors.lightWhite}`,
  margin: '24px 0',
};
