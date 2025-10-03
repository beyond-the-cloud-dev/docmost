import { Hr, Section, Text } from '@react-email/components';
import * as React from 'react';
import { content, divider, h1, paragraph, colors } from '../css/styles';
import { MailBody } from '../partials/partials';

interface Props {
  invitedUserName: string;
  invitedUserEmail: string;
}

export const InvitationAcceptedEmail = ({
  invitedUserName,
  invitedUserEmail,
}: Props) => {
  return (
    <MailBody>
      <Section style={content}>
        <Text style={h1}>Invitation Accepted</Text>
        <Text style={paragraph}>Great news!</Text>
        <Text style={paragraph}>
          <strong>{invitedUserName}</strong> ({invitedUserEmail}) has accepted your invitation and joined the Beyond the Cloud workspace.
        </Text>
        <Hr style={divider} />
        <Text style={{...paragraph, fontSize: '14px', color: colors.gray}}>
          They now have access to the workspace and can start collaborating with the team.
        </Text>
      </Section>
    </MailBody>
  );
};

export default InvitationAcceptedEmail;
