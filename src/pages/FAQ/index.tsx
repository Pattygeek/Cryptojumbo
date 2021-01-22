import React, { useLayoutEffect } from 'react';
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
  FullScreenSpinner,
} from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, getFAQRequest } from '../../redux';
const FAQ: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { faqs, success, loading } = useSelector((state: AppState) => {
    const { faqs } = state.others;
    const { getFAQ: loading } = state.loadingIndicators;
    const {
      success: { getFAQ: success },
    } = state.ajaxStatuses;
    return { faqs, success, loading };
  });
  useLayoutEffect(() => {
    if (!success) dispatch(getFAQRequest());
  }, [success]);
  if (loading) return <FullScreenSpinner spinning={loading} />;
  return (
    <Box>
      <Box as="header" p={{ base: '0px', md: '20px 40px' }}>
        <NavigationTop />
        <SectionWrapper pt={20} mb={10}>
          <Text
            as="h1"
            className="font-lg color-dark font-weight-600"
            textAlign="center"
            mb={'50px'}>
            Frequently asked questions
          </Text>
          <Accordion
            items={faqs.map((faq) => ({ title: faq.question, content: faq.answer }))}
          />
        </SectionWrapper>
      </Box>
      <PreFooter />
      <Footer />
    </Box>
  );
};

export default FAQ;
