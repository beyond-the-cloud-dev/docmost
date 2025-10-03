import { Section, Text, Button, Hr } from '@react-email/components';
import * as React from 'react';
import { button, buttonWrapper, content, divider, h1, paragraph } from '../css/styles';
import { MailBody } from '../partials/partials';

interface Props {
  inviteLink: string;
}

export const InvitationEmail = ({ inviteLink }: Props) => {
  return (
    <MailBody>
      <Section style={content}>
        <Text style={h1}>You're Invited!</Text>
        <Text style={paragraph}>
          Welcome!<br />You've been invited to join the Beyond the Cloud Knowledge Base.
        </Text>
        <Text style={paragraph}>
          Our collaborative workspace is designed to help you access documentation, share knowledge, and work together seamlessly with your team.
        </Text>
        <Hr style={divider} />
        <Section style={buttonWrapper}>
          <Button href={inviteLink} style={button}>
            Accept Invitation
          </Button>
        </Section>
        <Text style={paragraph}>
          If you have any questions, feel free to reach out to the team member who invited you.
        </Text>
      </Section>
    </MailBody>
  );
};

export default InvitationEmail;
