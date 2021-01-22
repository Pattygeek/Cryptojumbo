import React from 'react';
import { Box, Flex, Text, Image, Square, Stack, Center } from '@chakra-ui/react';
import { NavigationTop, Footer, SectionWrapper } from '../components';
import { AiOutlineStar } from 'react-icons/ai';
import { FaAward } from 'react-icons/fa';
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
        mb={{ base: '75%', sm: '40%', md: '20%' }}>
        <Box p={{ base: '0px', md: '20px 45px' }}>
          <NavigationTop />
        </Box>
        <SectionWrapper>
          <Flex direction="column" mt={{ base: 10, md: 20 }}>
            <Box
              flex={0.5}
              maxWidth={{ base: '100%', md: '480px' }}
              className="color-white">
              <Text
                as="h1"
                className="font-xlg font-weight-600"
                lineHeight="31px"
                mb={'15px'}>
                Jumbo Academy
              </Text>
              <Text lineHeight="29.5px" className="font-lg font-weight-400" mb={10}>
                We believe the finanacial market should be universally accessible to
                you.
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
        <SectionWrapper mb={'60px'}>
          <Box
            as="article"
            borderRadius={15}
            boxShadow="0px 5px 20px rgba(20, 102, 204, 0.15)"
            className="bg-white offers"
            py={'40px'}
            px={{ base: 5, md: '55px' }}
            transform="translateY(70%)">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              className="what-we-do"
              spacing={{ base: '20px', sm: '40px', md: 20 }}>
              <Stack direction="row" spacing={5} flex={1}>
                <Box display={{ base: 'inline-block', md: 'none' }}>
                  <Image src={educate} alt="Education" width="25px" height="25px" />
                </Box>
                <Stack
                  spacing={{ base: '10px', md: 5 }}
                  direction="column"
                  flex={1}
                  className="academy">
                  <Flex align="center" justify="space-between">
                    <Box>
                      <Text
                        mb={{ base: '5px', md: 3 }}
                        className="font-slg color-gray-heading font-weight-500">
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
                  <Text className="color-gray-text font-md" lineHeight="24px">
                    We provide you with timely information to access better
                    oppurtunities in the crypto space
                  </Text>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={5} flex={1}>
                <Box display={{ base: 'inline-block', md: 'none' }}>
                  <Image src={plant} alt="Plant" width="25px" height="25px" />
                </Box>
                <Stack spacing={5} direction="column" flex={1} className="academy">
                  <Flex align="center" justify="space-between">
                    <Box>
                      <Text
                        mb={{ base: '5px', md: 3 }}
                        className="font-slg color-gray-heading font-weight-500">
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
                  <Text className="color-gray-text font-md" lineHeight="24px">
                    Our diverse & collaborative team will inspire you with thoughtful
                    & constructive feedbacks.
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
                <Stack spacing={5} direction="column" flex={1} className="academy">
                  <Flex align="center" justify="space-between">
                    <Box>
                      <Text
                        mb={{ base: '5px', md: 3 }}
                        className="font-slg color-gray-heading font-weight-500">
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
                  <Text className="color-gray-text font-md" lineHeight="24px">
                    We provide you with timely information to access better
                    oppurtunities in the crypto space
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </SectionWrapper>
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
              <Square size={'60px'} borderRadius={5} bg="blue.100">
                <Image src={award} width="30px" height="auto" />
              </Square>
              <Box flex={1}>
                <Text
                  mb={{ base: 1, sm: 3 }}
                  color="blue.100"
                  className="uppercase font-md font-weight-500">
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
              <Square size={'60px'} borderRadius={5} bg="brown.100">
                <Image src={award} width="30px" height="auto" />
              </Square>
              <Box flex={1}>
                <Text
                  mb={{ base: 1, sm: 3 }}
                  color="brown.100"
                  className="uppercase font-md font-weight-500">
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
              <Square size={'60px'} borderRadius={5} className="bg-primary-dirty">
                <Image src={award} width="30px" height="auto" />
              </Square>
              <Box flex={1}>
                <Text
                  mb={{ base: 1, sm: 3 }}
                  className="uppercase font-md color-primary-dirty font-weight-500">
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
              <Square size={'60px'} borderRadius={5} className="bg-primary">
                <Image src={award} width="30px" height="auto" />
              </Square>
              <Box flex={1}>
                <Text
                  mb={{ base: 1, sm: 3 }}
                  className="uppercase font-md color-primary font-weight-500">
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
