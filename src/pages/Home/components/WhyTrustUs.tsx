import React from 'react';
import { Box, Flex, Text, Image, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import { SectionWrapper } from '../../components';
import lady from '../../../assets/lady.png';
export const WhyTrustUs: React.FC = (): JSX.Element => {
  return (
    <SectionWrapper>
      <Stack
        direction={{ base: 'row', sm: 'row' }}
        align="flex-start"
        spacing={5}
        justify="center">
        <Box
          flex={1}
          maxWidth={{ base: 'auto', sm: '45%' }}
          pt={{ base: 0, md: 10 }}
          lineHeight="24px">
          <Text
            textColor="gray.800"
            mb={3}
            as="h3"
            className="font-weight-500"
            fontSize={{ base: '13px', md: '24px' }}
            lineHeight="24px">
            Why Trust us ?
          </Text>
          <Text
            mb={'5px'}
            className="font-weight-400 color-gray-text"
            fontSize={{ base: '10px', md: '18px' }}
            lineHeight={{ base: '12px', md: '24px' }}>
            CryptoJumbo is a user friendly crypto platform, aimed at delivering the
            best crypto services. With active customers in over 15 countries in the
            world, including but not limited to, Nigeria, Ghana, South Africa,
            Uganda, Cyprus, Turkey, Russia, United States, Canada, United Kingdom,
            Kenya.
          </Text>
          <Flex
            align="center"
            as={Link}
            className="color-dark font-md"
            _hover={{ color: 'brand.100' }}
            display="inline-flex"
            to="/about">
            <Text
              fontSize={{ base: '11px', md: '18px' }}
              className="color-dark font-weight-400"
              lineHeight="16px"
              mr={2}>
              Read more about us
            </Text>
            <Box
              as={BsArrowRightShort}
              _hover={{ color: 'brand.100' }}
              size={30}
              className="color-inherit"
            />
          </Flex>
        </Box>
        <Image
          src={lady}
          alt="why trust us"
          width={{ base: '145px', md: '334px' }}
          height="auto"
          borderRadius={'10px'}
        />
      </Stack>
    </SectionWrapper>
  );
};
