import React from 'react';
import {
  Stack,
  Flex,
  Text,
  Image,
  AspectRatio,
  Square,
  Box,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FormInput, TextArea, SubmitButton } from '../../../components';
import { SectionWrapper } from '../Wrappers';

export const ContactForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('Required'),
      email: yup.string().email('Email is not valid').required('Required'),
      message: yup.string().required('Required'),
    }),
    onSubmit: ({}) => {
      console.log('submit');
    },
  });
  return (
    <SectionWrapper justifyContent="center">
      <Stack direction="column" justify="center" align="center">
        <Box flex={0.2} maxWidth={{ base: '100%', sm: '590px' }}>
          <Text
            as="h2"
            fontSize={{ base: '12px', md: '24px' }}
            lineHeight="16px"
            className="color-dark font-weight-600"
            textAlign="center"
            mb={{ base: '10px', md: 5 }}>
            Need to reach out to us?
          </Text>
          <Text
            fontSize={{ base: '12px', md: '18px' }}
            lineHeight={{ base: '17px', md: '29.5px' }}
            clasName="color-gray-text"
            mb={'30px'}
            textAlign="center">
            Mail
            <Text as="span" className="color-gray-heading font-weight-500" ml={1}>
              hello@cryptojumbo.com
            </Text>
            <Text as="span" className="color-gray-text" ml={1}>
              or call
            </Text>
            <Text as="span" className="color-gray-heading font-weight-500" ml={1}>
              08123456789, 09087654321
            </Text>
            <Text as="span" className="color-gray-text" ml={1}>
              or drop a message now
            </Text>
          </Text>
          <form onSubmit={formik.handleSubmit}>
            <Stack direction="column" spacing={0}>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: '0px', sm: 5 }}
                mb={{ base: '0px', sm: 5 }}>
                <FormInput
                  mb={0}
                  label="Name"
                  placeholder="Name"
                  {...formik.getFieldProps('name')}
                  inputBg="gray.900"
                />
                <FormInput
                  mb={0}
                  label="Email"
                  placeholder="Enter email address"
                  {...formik.getFieldProps('email')}
                  inputBg="gray.900"
                />
              </Stack>
              <TextArea
                mb={0}
                {...formik.getFieldProps('message')}
                label="Your Message"
                placeholder="Type here"
                inputBg="gray.900"
              />
            </Stack>
            <Flex
              direction="column"
              align="center"
              flex={0.5}
              mt={{ base: 5, md: '60px' }}>
              <Box
                as="button"
                type="button"
                borderRadius={5}
                className={`bg-primary color-white font-weight-500`}
                px={{ base: '40px', md: '70px' }}
                py={{ base: 3, md: '15px' }}>
                Send Message
              </Box>
            </Flex>
          </form>
        </Box>
      </Stack>
    </SectionWrapper>
  );
};
