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
    <SectionWrapper>
      <Stack direction="column" justify="center" align="center">
        <Box flex={0.2} maxWidth={{ base: '100%', sm: '590px' }}>
          <Text
            as="h2"
            className="font-lg color-dark font-weight-600"
            textAlign="center"
            mb={5}>
            Need to reach out to us?
          </Text>
          <Text clasName="font-md color-gray-text" mb={5} textAlign="center">
            Mail
            <Text
              as="span"
              className="font-md color-gray-heading font-weight-500"
              ml={1}>
              hello@cryptojumbo.com
            </Text>
            <Text as="span" className="font-md color-gray-text" ml={1}>
              or call
            </Text>
            <Text
              as="span"
              className="font-md color-gray-heading font-weight-500"
              ml={1}>
              08123456789, 09087654321
            </Text>
            <Text as="span" className="font-md color-gray-text" ml={1}>
              or drop a message now
            </Text>
          </Text>
          <form onSubmit={formik.handleSubmit}>
            <Stack direction="column" spacing={0}>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={5} mb={5}>
                <FormInput
                  label="Name"
                  placeholder="Name"
                  {...formik.getFieldProps('name')}
                  inputBg="gray.900"
                />
                <FormInput
                  label="Email"
                  placeholder="Enter email address"
                  {...formik.getFieldProps('email')}
                  inputBg="gray.900"
                />
              </Stack>
              <TextArea
                {...formik.getFieldProps('message')}
                label="Your Message"
                placeholder="Type here"
                inputBg="gray.900"
              />
            </Stack>
            <Flex direction="column" align="center" flex={0.5} mt={5}>
              <Box
                as="button"
                type="button"
                borderRadius={5}
                className={`bg-primary color-white font-weight-500`}
                px={'60px'}
                py={3}>
                Send Message
              </Box>
            </Flex>
          </form>
        </Box>
      </Stack>
    </SectionWrapper>
  );
};
