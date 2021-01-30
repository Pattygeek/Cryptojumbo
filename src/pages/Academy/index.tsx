import React from 'react';
import { Box, Flex, Text, Image, Square, Stack, Center } from '@chakra-ui/react';
import { NavigationTop, Footer, SectionWrapper } from '../components';
import { Link } from 'react-router-dom';
import educate from '../../assets/education.png';
import plant from '../../assets/plant.png';
import lightbulb from '../../assets/light-bulb.png';
import award from '../../assets/award.png';

const Academy: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Box
        as="header"
        className="academy-header"
        mb={{ base: '75%', sm: '40%', md: '20%' }}
        pb="25px">
        <Box p={{ base: '0px', md: '20px 45px' }}>
          <NavigationTop />
        </Box>
        <Box position="relative">
          <SectionWrapper justifyContent="flex-start">
            <Flex direction="column" width="100%" mt={{ base: 5, md: 20 }}>
              <Box
                flex={0.1}
                className="color-white"
                maxWidth={{ base: '180px', sm: '440px' }}>
                <Text
                  as="h1"
                  fontSize={{ base: '14px', md: '30px' }}
                  lineHeight="31px"
                  className="font-weight-600"
                  mb={{ base: '0px', md: '15px' }}>
                  Jumbo Academy
                </Text>
                <Text
                  fontSize={{ base: '11px', md: '22px' }}
                  lineHeight={{ base: '14px', md: '29px' }}
                  className="font-weight-400"
                  mb={10}>
                  We believe the finanacial market should be universally accessible
                  to you.
                </Text>
                <Box
                  as={Link}
                  to="/"
                  className="padding-horizontal-md padding-vertical-sm bg-white color-dark"
                  borderRadius={5}
                  transition="0.2s box-shadow"
                  _hover={{ boxShadow: '2px 4px 15px 1px rgba(0, 0, 0, 0.2)' }}>
                  Join Academy
                </Box>
              </Box>
            </Flex>
          </SectionWrapper>
          <Box
            position={{ base: 'absolute' }}
            bottom={{ base: '-300px', sm: '-90%', md: '-400px' }}
            left={{ base: '25px', md: 20, lg: 40 }}
            right={{ base: '25px', md: 20, lg: 40 }}
            display="flex"
            flexDirection="column"
            alignItems={{ base: 'flex-start', lg: 'center' }}>
            <Box
              width="100%"
              maxWidth="1500px"
              as="article"
              borderRadius={15}
              boxShadow="0px 5px 20px rgba(20, 102, 204, 0.15)"
              className="bg-white offers"
              py={{ base: '20px', md: '60px' }}
              px={{ base: '30px', md: '50px', lg: '100px' }}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                className="what-we-do"
                spacing={{ base: '20px', sm: '40px', md: 20 }}>
                <Stack direction="row" spacing={5} flex={1}>
                  <Box display={{ base: 'inline-block', md: 'none' }}>
                    <Image
                      src={educate}
                      alt="Education"
                      width="25px"
                      height="25px"
                    />
                  </Box>
                  <Stack
                    spacing={{ base: '5px', md: 5 }}
                    direction="column"
                    flex={1}
                    className="academy">
                    <Flex align="center" justify="space-between">
                      <Box>
                        <Text
                          fontSize={{ base: '12px', md: '18px' }}
                          lineHeight={'24px'}
                          mb={{ base: '1px', md: 3 }}
                          className="color-gray-heading font-weight-500">
                          We educate
                        </Text>
                        <Box width="45px" height="2px" className="stroke" />
                      </Box>
                      <Image
                        src={educate}
                        alt="Education"
                        display={{ base: 'none', md: 'inline-block' }}
                      />
                    </Flex>
                    <Text
                      fontSize={{ base: '9px', md: '14px' }}
                      lineHeight={{ base: '11px', md: '24px' }}
                      className="color-gray-text">
                      We provide you with timely information to access better
                      oppurtunities in the crypto space
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={5} flex={1}>
                  <Box display={{ base: 'inline-block', md: 'none' }}>
                    <Image src={plant} alt="Plant" width="25px" height="25px" />
                  </Box>
                  <Stack
                    spacing={{ base: '5px', md: 5 }}
                    direction="column"
                    flex={1}
                    className="academy">
                    <Flex align="center" justify="space-between">
                      <Box>
                        <Text
                          fontSize={{ base: '12px', md: '18px' }}
                          lineHeight={'24px'}
                          mb={{ base: '1px', md: 3 }}
                          className="color-gray-heading font-weight-500">
                          We inspire
                        </Text>
                        <Box width="45px" height="2px" className="stroke" />
                      </Box>
                      <Image
                        src={plant}
                        width="10px"
                        height="auto"
                        alt="Education"
                        display={{ base: 'none', md: 'inline-block' }}
                      />
                    </Flex>
                    <Text
                      fontSize={{ base: '9px', md: '14px' }}
                      lineHeight={{ base: '11px', md: '24px' }}
                      className="color-gray-text">
                      Our diverse & collaborative team will inspire you with
                      thoughtful & constructive feedbacks.
                    </Text>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={5} flex={1}>
                  <Box display={{ base: 'inline-block', md: 'none' }}>
                    <Image
                      src={lightbulb}
                      alt="Light bulb"
                      width="25px"
                      height="25px"
                    />
                  </Box>
                  <Stack
                    spacing={{ base: '5px', md: 5 }}
                    direction="column"
                    flex={1}
                    className="academy">
                    <Flex align="center" justify="space-between">
                      <Box>
                        <Text
                          fontSize={{ base: '12px', md: '18px' }}
                          lineHeight={'24px'}
                          mb={{ base: '1px', md: 3 }}
                          className="color-gray-heading font-weight-500">
                          We enrich
                        </Text>
                        <Box width="45px" height="2px" className="stroke" />
                      </Box>
                      <Image
                        src={lightbulb}
                        width="10px"
                        height="auto"
                        alt="Light bulb"
                        display={{ base: 'none', md: 'inline-block' }}
                      />
                    </Flex>
                    <Text
                      fontSize={{ base: '9px', md: '14px' }}
                      lineHeight={{ base: '11px', md: '24px' }}
                      className="color-gray-text">
                      Our long term objective would enrich your goals, decisions &
                      risks
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <AcademicPackage />
      <Center
        flexDirection="column"
        className="bg-white padding-vertical-lg"
        px={10}>
        <Text
          className="font-md color-dark font-weight-600"
          textAlign="center"
          mb={3}>
          Journey of a thousand miles starts with a step.
        </Text>
        <Text textAlign="center" className="color-dark font-weight-400" mb={5}>
          Yours starts here.
        </Text>
        <Box
          as={Link}
          to="/dashboard/trade"
          borderRadius={5}
          borderWidth={'2px'}
          _hover={{
            boxShadow: '4px 5px 15px 1px #f7740841',
            bg: 'brand.100',
            color: 'white',
          }}
          className="btn-primary-outline color-primary color-white font-weight-500"
          px={{ base: '20px', sm: '40px', md: '60px' }}
          py={3}>
          Join Academy
        </Box>
      </Center>
      <Footer />
    </Box>
  );
};

const AcademicPackage: React.FC = (): JSX.Element => {
  return (
    <SectionWrapper>
      <Box px={{ base: '10px', sm: '20px', md: '60px', lg: '120px' }}>
        <Stack direction="row" align="center" spacing={5} mb={10}>
          <Text
            fontSize={{ base: '12px', md: '24px' }}
            lineHeight="24px"
            textAlign="center"
            className="font-lg font-weight-500 color-gray-heading">
            Academy Stages & Packages
          </Text>
          <Box flex={1} height="1.5px" className="slim-line" />
        </Stack>
        <Stack direction="column" spacing={10}>
          <Stack
            spacing={10}
            justify="space-between"
            direction={{ base: 'column', sm: 'row' }}>
            <Stack
              direction={{ base: 'row', sm: 'column' }}
              spacing={{ base: 3, sm: '35px' }}
              flex={0.4}>
              <Square
                size={{ base: '45px', md: '57px' }}
                borderRadius={5}
                bg="blue.100">
                <Image
                  src={award}
                  width={{ base: '22px', md: '28px' }}
                  height="auto"
                />
              </Square>
              <Box flex={1}>
                <Text
                  fontSize={{ base: '11px', md: '16px' }}
                  lineHeight={{ base: '16.5px', md: '24px' }}
                  mb={{ base: 1, sm: 3 }}
                  color="blue.100"
                  className="uppercase font-weight-500">
                  beginner
                </Text>
                <Text className="font-sm color-gray-text">
                  This stage incolves understanding the cryptosphere, cryptocurency,
                  blockchain, and financial freedom
                </Text>
              </Box>
            </Stack>
            <Stack
              direction={{ base: 'row', sm: 'column' }}
              spacing={{ base: 3, sm: '35px' }}
              flex={0.4}>
              <Square
                size={{ base: '45px', md: '57px' }}
                borderRadius={5}
                bg="brown.100">
                <Image
                  src={award}
                  width={{ base: '22px', md: '28px' }}
                  height="auto"
                />
              </Square>
              <Box flex={1}>
                <Text
                  fontSize={{ base: '11px', md: '16px' }}
                  lineHeight={{ base: '16.5px', md: '24px' }}
                  mb={{ base: 1, sm: 3 }}
                  color="brown.100"
                  className="uppercase font-weight-500">
                  pro-beginner
                </Text>
                <Text className="font-sm color-gray-text">
                  This stage involves the understanding the market, trading zones,
                  indicators, pips strategies and calculations.
                </Text>
              </Box>
            </Stack>
          </Stack>
          <Stack
            spacing={10}
            justify="space-between"
            direction={{ base: 'column', sm: 'row' }}>
            <Stack
              direction={{ base: 'row', sm: 'column' }}
              spacing={{ base: 3, sm: '35px' }}
              flex={0.4}>
              <Square
                size={{ base: '45px', md: '57px' }}
                borderRadius={5}
                className="bg-primary-dirty">
                <Image
                  src={award}
                  width={{ base: '22px', md: '28px' }}
                  height="auto"
                />
              </Square>
              <Box flex={1}>
                <Text
                  fontSize={{ base: '11px', md: '16px' }}
                  lineHeight={{ base: '16.5px', md: '24px' }}
                  mb={{ base: 1, sm: 3 }}
                  className="uppercase color-primary-dirty font-weight-500">
                  intermediate
                </Text>
                <Text className="font-sm color-gray-text">
                  This stage involves technical analysis, fundamental anaysis and
                  trade excutions.
                </Text>
              </Box>
            </Stack>
            <Stack
              direction={{ base: 'row', sm: 'column' }}
              spacing={{ base: 3, sm: '35px' }}
              flex={0.4}>
              <Square
                size={{ base: '45px', md: '57px' }}
                borderRadius={5}
                className="bg-primary">
                <Image
                  src={award}
                  width={{ base: '22px', md: '28px' }}
                  height="auto"
                />
              </Square>
              <Box flex={1}>
                <Text
                  fontSize={{ base: '11px', md: '16px' }}
                  lineHeight={{ base: '16.5px', md: '24px' }}
                  mb={{ base: 1, sm: 3 }}
                  className="uppercase color-primary font-weight-500">
                  expert
                </Text>
                <Text className="font-sm color-gray-text">
                  This stage involves technical and fundamental analysis and Holding
                  strategy
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </SectionWrapper>
  );
};

export default Academy;
