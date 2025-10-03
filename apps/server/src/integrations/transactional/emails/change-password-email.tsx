import { Hr, Section, Text } from '@react-email/components';
import * as React from 'react';
import { content, divider, h1, paragraph, colors } from '../css/styles';
import { MailBody } from '../partials/partials';

interface Props {
  username?: string;
}

export const ChangePasswordEmail = ({ username }: Props) => {
  return (
    <MailBody>
      <Section style={content}>
        <Text style={h1}>Password Changed Successfully</Text>
        <Text style={paragraph}>Hi {username},</Text>
        <Text style={paragraph}>
          This email confirms that your password has been successfully changed for your Beyond the Cloud account.
        </Text>
        <Hr style={divider} />
        <Text style={{...paragraph, fontSize: '14px', color: colors.gray}}>
          If you did not make this change, please contact your administrator immediately to secure your account.
        </Text>
      </Section>
    </MailBody>
  );
};

export default ChangePasswordEmail;
