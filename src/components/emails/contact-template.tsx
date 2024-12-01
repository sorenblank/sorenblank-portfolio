import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
  projectType: string;
  projectBudget: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://sorenblank.com';

export const ContactEmail = ({
  name,
  email,
  message,
  projectType,
  projectBudget
}: ContactEmailProps) => {
  const previewText = `Message from ${name} on Portfolio`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              {/* TODO: Swap this out with a good icon */}
              <Img
                src={`https://sorenblank.com/favicon/android-chrome-512x512.png`}
                width="40"
                height="37"
                alt="Logo"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Message from <strong>{name}</strong> on <strong>Portfolio</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>{name}</strong> (
              <Link
                href={`mailto:${email}`}
                className="text-blue-600 no-underline"
              >
                {email}
              </Link>
              ) has left you a message on your <strong>Portfolio</strong>.
            </Text>

            <Text className="text-[14px] leading-[24px] text-black">
              <strong>Project Type:</strong> {projectType}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>Project Budget:</strong> {projectBudget}
            </Text>

            <Text className="text-[14px] leading-[24px] text-black">
              <strong>Message:</strong>
            </Text>
            <Text className="whitespace-pre-wrap text-[14px] leading-[24px] text-black">
              {message}
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              This message was automatically generated and sent from your
              Portfolio Website.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ContactEmail.PreviewProps = {
  name: 'Soren Blank',
  email: 'soren@sorenblank.com',
  projectType: 'Website',
  projectBudget: '2-5K',
  message: `Hello!

This is John Doe, from Example. Just wanted to say hi!
  `
} as ContactEmailProps;

export default ContactEmail;
