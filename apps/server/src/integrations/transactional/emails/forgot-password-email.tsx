import { Button, Hr, Section, Text } from '@react-email/components';
import * as React from 'react';
import { button, buttonWrapper, content, divider, h1, paragraph, colors } from '../css/styles';
import { MailBody } from '../partials/partials';

interface Props {
  username: string;
  resetLink: string;
}

export const ForgotPasswordEmail = ({ username, resetLink }: Props) => {
  return (
    <MailBody>
      <Section style={content}>
        <Text style={h1}>Password Reset Request</Text>
        <Text style={paragraph}>Hi {username},</Text>
        <Text style={paragraph}>
          We received a request to reset your password for your Beyond the Cloud account.
        </Text>
        <Text style={paragraph}>
          Click the button below to create a new password. This link will expire in 24 hours for security reasons.
        </Text>
        <Hr style={divider} />
        <Section style={buttonWrapper}>
          <Button href={resetLink} style={button}>
            Reset Password
          </Button>
        </Section>
        <Hr style={divider} />
        <Text style={{...paragraph, fontSize: '14px', color: colors.gray}}>
          If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged.
        </Text>
      </Section>
    </MailBody>
  );
};

export default ForgotPasswordEmail;
