import React, { useEffect } from 'react';
import {
  Box,
  Text,
  Flex,
  Switch,
  useDisclosure,
  UseDisclosureProps,
  FormControl,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { SubmitButton, useAjaxToast } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, updateProfileRequest } from '../../../redux';

const TransactionPin: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const { token, success, error, loading } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const {
      success: { updateProfile: success },
      errors: { updateProfile: error },
    } = state.ajaxStatuses;
    const { updateProfile: loading } = state.loadingIndicators;
    return { token, success, error, loading };
  });
  const formik = useFormik({
    initialValues: {
      pin: '',
    },
    validationSchema: yup.object({
      pin: yup.string().required('Required'),
    }),
    onSubmit: ({ pin }) => {
      dispatch(
        updateProfileRequest({
          token,
          data: {
            transaction_pin: pin,
          },
        }),
      );
    },
  });
  return (
    <Box className="bg-white card-shadow" borderRadius={10} p={5} mb={5}>
      <Text className="font-weight-500 color-dark font-sm" mb={3}>
        Transaction pin
      </Text>
      <Stack direction={{ base: 'column', sm: 'row' }}>
        <FormControl maxWidth={{ base: '100%', sm: '60%' }}>
          <Input
            placeholder="Old password"
            _placeholder={{ textColor: '#747474', fontSize: '0.8em' }}
            focusBorderColor="none"
            className="font-sm bg-gray-light color-gray-2"
            bg="gray.500"
            border="none"
            {...formik.getFieldProps('pin')}
          />
          <Text as="p" className="color-danger font-weight-500 font-sm">
            {formik.touched.pin && formik.errors.pin}
          </Text>
        </FormControl>
        <Box flex={1}>
          <SubmitButton action={formik.handleSubmit}>Save</SubmitButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default TransactionPin;
