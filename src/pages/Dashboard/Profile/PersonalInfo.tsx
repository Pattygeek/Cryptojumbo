import React, { useEffect } from 'react';
import {
  Box,
  Text,
  Flex,
  Stack,
  useDisclosure,
  UseDisclosureProps,
  FormControl,
  Input,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Select, SubmitButton, useAjaxToast } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, updateProfileRequest } from '../../../redux';

const PersonalInfo: React.FC = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box className="bg-dark-gradient card-shadow" borderRadius={10} mb={5}>
      {isOpen ? (
        <UpdatePersonalInfo onClose={onClose} />
      ) : (
        <SavedInfo onOpen={onOpen} />
      )}
    </Box>
  );
};

const SavedInfo: React.FC<Pick<UseDisclosureProps, 'onOpen'>> = ({
  onOpen,
}): JSX.Element => {
  const { user } = useSelector((state: AppState) => {
    const { user } = state.profile;
    return { user };
  });
  const sex: any = {
    m: 'Male',
    f: 'Female',
  };
  return (
    <Flex direction="column" p={5}>
      <Flex justify="space-between" mb={5}>
        <Box flex={1} mr={2}>
          <Text className="color-white font-weight-600 font-sm" mb={3}>
            {user?.email}
          </Text>
          <Box width="60px" height="1.3px" bg="gray.500" />
        </Box>
        <Box
          as="button"
          className="bg-transparent color-white font-sm slim-border-white"
          p="2px 10px"
          _hover={{ bg: 'white', color: '#000000' }}
          borderRadius={5}
          onClick={onOpen}>
          Update
        </Box>
      </Flex>
      <Stack direction="row" spacing={'40px'}>
        <Box className="color-white">
          <Text className="capitalize font-xs font-weight-400" mb={1}>
            Name
          </Text>
          <Text className="capitalize font-sm font-weight-500">
            {user?.first_name} {user?.last_name}
          </Text>
        </Box>
        <Box className="color-white">
          <Text className="capitalize font-xs font-weight-400" mb={1}>
            phone number
          </Text>
          <Text className="capitalize font-sm font-weight-500">{user?.phone}</Text>
        </Box>
        <Box className="color-white" flex={0.5}>
          <Text className="capitalize font-xs font-weight-400" mb={1}>
            sex
          </Text>
          <Text className="capitalize font-sm font-weight-500">
            {user?.gender ? sex[user.gender.toLowerCase()] : ''}
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
};

const UpdatePersonalInfo: React.FC<Pick<UseDisclosureProps, 'onClose'>> = ({
  onClose,
}): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const { user, token, success, error, loading } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const { user } = state.profile;
    const {
      success: { updateProfile: success },
      errors: { updateProfile: error },
    } = state.ajaxStatuses;
    const { updateProfile: loading } = state.loadingIndicators;
    return { user, token, success, error, loading };
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      sex: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('Required'),
      phone: yup.string().required('Required'),
      sex: yup.string().required('Required'),
    }),
    onSubmit: ({ name, phone, sex }) => {
      const [first_name, last_name] = name.split(' ');
      dispatch(
        updateProfileRequest({
          token,
          data: { first_name, last_name, phone, gender: sex.split('')[0] },
        }),
      );
    },
  });
  console.log('name.split', formik.values.name.split(' '));
  useEffect(() => {
    console.log('user', user);
    if (user) {
      formik.setValues((values) => ({
        ...values,
        name: `${user.first_name as string} ${user.last_name as string}`,
        phone: user.phone as string,
        sex: (user.gender as string) === 'F' ? 'Female' : 'Male',
      }));
    }
  }, [user]);
  useEffect(() => {
    if (error)
      toast({
        status: 'error',
        description: error.error,
      });
    if (success && success.message) {
      toast({
        status: 'success',
        description: success.message,
      });
      onClose && onClose();
    }
  }, [success, error]);
  return (
    <Flex direction="column" p={5}>
      <Box flex={0.7} mb={5}>
        <Text className="color-white font-weight-500 font-sm" mb={5}>
          {user?.email}
        </Text>
        <Box width="60px" height="1px" className="bg-white" />
      </Box>
      <Box>
        <FormControl mb={5}>
          <Text
            as="label"
            className={`color-white font-sm font-weight-500 margin-bottom-xs`}
            mb={1}>
            Name
          </Text>
          <Input
            placeholder="Full name"
            focusBorderColor="none"
            className="bg-gray-light color-white"
            bg="gray.400"
            border="none"
            {...formik.getFieldProps('name')}
          />
        </FormControl>
        <Flex justify="space-between" direction={{ base: 'column', sm: 'row' }}>
          <FormControl flex={0.48} mb={5}>
            <Text
              as="label"
              className={`color-white font-sm font-weight-500 margin-bottom-xs`}
              mb={1}>
              Phone Number
            </Text>
            <NumberInput {...formik.getFieldProps('phone')}>
              <NumberInputField
                focusBorderColor="none"
                className="bg-gray-light color-white"
                bg="gray.400"
                border="none"
                placeholder="Phone number"
                {...formik.getFieldProps('phone')}
              />
            </NumberInput>
          </FormControl>
          <Box flex={0.48}>
            <Select
              label="Sex"
              labelClassName="color-white"
              options={['Male', 'Female']}
              value={formik.values.sex}
              onChange={(e) => formik.setFieldValue('sex', e.target.value)}
              focusBorderColor="none"
              className="bg-gray-light color-white"
              optionClassName="color-dark"
              bg="gray.400"
              border="none"
              iconColor="#fff"
            />
          </Box>
        </Flex>
      </Box>
      <Flex justify="flex-end" flex={0.3}>
        <Box flex={0.4}>
          <SubmitButton
            disabled={!(formik.dirty && formik.isValid)}
            loading={loading}
            spinColor="secondary"
            action={formik.handleSubmit}
            validClassName="bg-white color-dark"
            inValidClassName="btn-white-disabled"
            className="btn">
            Save
          </SubmitButton>
        </Box>
      </Flex>
    </Flex>
  );
};

export default PersonalInfo;
