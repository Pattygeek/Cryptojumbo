import React from 'react';
import { SectionWrapper } from '../../components';
import { Flex, Image, Text, Box, Stack, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const FAQs: React.FC = () => {
  return (
    <SectionWrapper mt={50}>
      <Text
        textAlign="center"
        className="color-gray-text font-weight-500"
        fontSize={{ base: '13px', md: '26px' }}
        lineHeight={'24px'}
        mb={{ base: 5, md: 10 }}>
        Frequently Asked Questions
      </Text>
      <Stack
        spacing={{ base: '10px', md: 10 }}
        mb={5}
        direction={{ base: 'column', md: 'row' }}>
        <FAQ
          question="What is CryptoJumbo?"
          answer="CryptoJumbo is a digital cryptocurrency platform where you can sell your bitcoin at an affordable rate."
        />
        <FAQ
          question="What is Bitcoin?"
          answer="Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto and started in 2009 when its implementation was released as open-source software."
        />
        <FAQ
          question="What is Ethereum?"
          answer="Ethereum is a decentralized open source blockchain featuring smart contract functionality. It is the second-largest cryptocurrency by market capitalization, behind Bitcoin"
        />
      </Stack>
      <Center>
        <Box
          as={Link}
          to="/faqs"
          borderRadius={5}
          className="bg-white color-dark font-weight-500 font-md"
          py={3}
          px={'40px'}>
          Read more FAQs
        </Box>
      </Center>
    </SectionWrapper>
  );
};

declare interface FAQProps {
  question: string;
  answer: string;
}
const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  return (
    <Box flex={1} className="bg-primary-gradient-opacity" borderRadius={5} p={5}>
      <Text
        lineHeight="16px"
        fontSize={{ base: '12px', md: '20px' }}
        className="color-dark font-weight-600"
        mb={'10px'}>
        {question}
      </Text>
      <Text className="color-dark font-sm font-weight-400">{answer}</Text>
    </Box>
  );
};
