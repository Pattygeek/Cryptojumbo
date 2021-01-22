import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  AspectRatio,
  Square,
  Stack,
} from '@chakra-ui/react';
import {
  NavigationTop,
  PreFooter,
  Footer,
  SectionWrapper,
  Accordion,
} from '../components';
const PrivacyPolicy: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Box as="header" p={{ base: '0px', md: '20px 40px' }}>
        <NavigationTop />
      </Box>
      <Box>
        <SectionWrapper>
          <Text
            as="h1"
            className="font-lg color-dark font-weight-600"
            textAlign="center"
            mb={10}>
            Privacy Policy
          </Text>
          <Box px={{ base: '10px', md: '50px' }}>
            <Policy
              title="How we collect personal data"
              content="When we open and operate an account for you, provide you with our products and services, or communicate with you, we may collect your personal data. We do this in various ways, including:
when you provide it to us such as when you sign up for a x account, use our products and services, or take part in customer surveys, competitions and promotions;
when you communicate with us by email, chat, telephone or any other means, we collect the communication and any data provided in it;
when you use the x platform we collect information on your transactions and other use of your x account;
when we obtain information from third parties such as identity verification services, credit reference agencies, and regulatory and enforcement agencies.
"
            />
            <Policy
              title="How we use cookies"
              content="When we open and operate an account for you, provide you with our products and services, or communicate with you, we may collect your personal data. We do this in various ways, including:
when you provide it to us such as when you sign up for a x account, use our products and services, or take part in customer surveys, competitions and promotions;
when you communicate with us by email, chat, telephone or any other means, we collect the communication and any data provided in it;
when you use the x platform we collect information on your transactions and other use of your x account;
when we obtain information from third parties such as identity verification services, credit reference agencies, and regulatory and enforcement agencies.
"
            />
            <Policy
              title="Third-party cookies"
              content="We collect the communication and any data provided in it;
              when you use the x platform we collect information on your transactions and other use of your x account;
              when we obtain information from third parties such as identity verification services, credit reference agencies, and regulatory and enforcement agencies.
              When we open and operate an account for you, provide you with our products and services, or communicate with you, we may collect your personal data. We do this in various ways, including:
              when you provide it to us such as when you sign up for a x account, use our products and services, or take part in customer surveys, competitions and promotions;
              when you communicate with us by email, chat, telephone or any other means, we collect the communication and any data provided in it;
              when you use the x platform we collect information on your transactions and other use of your x account;
              when we obtain information from third parties such as identity verification services, credit reference agencies, and regulatory and enforcement agencies.
              "
            />
          </Box>
        </SectionWrapper>
      </Box>
      <Footer />
    </Box>
  );
};

declare interface PolicyProps {
  title: string;
  content: string;
}
const Policy: React.FC<PolicyProps> = ({ title, content }) => {
  return (
    <Box mb={10}>
      <Text mb={5} as="h2" className="font-md color-dark font-weight-600">
        {title}
      </Text>
      <Text className="font-sm color-dark" lineHeight="24px">
        {content}
      </Text>
    </Box>
  );
};

export default PrivacyPolicy;
