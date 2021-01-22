import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Switch,
  useDisclosure,
  UseDisclosureProps,
  FormControl,
  Input,
  StackDivider,
  Stack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { SubmitButton, useAjaxToast } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppState,
  changePasswordRequest,
  updateProfileRequest,
} from '../../../redux';

const AccountSecurity: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const { user } = state.profile;
    return { user, token };
  });
  const [toggle, setToggle] = useState<boolean>(
    user?.two_factor_auth_enabled || false,
  );

  const handle2FAToggle = (bool: boolean) => {
    dispatch(
      updateProfileRequest({ token, data: { two_factor_auth_enabled: bool } }),
    );
    setToggle(bool);
  };
  return (
    <Box className="bg-white card-shadow" borderRadius={10} p={'20px 25px'} mb={5}>
      <Text className="color-dark font-md font-weight-500" mb={5}>
        Account Security
      </Text>
      <Stack
        direction="column"
        spacing={1}
        divider={<StackDivider borderColor="gray.500" />}>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          align={{ base: 'space-between', sm: 'center' }}
          spacing={2}>
          <Text className="font-sm font-weight-400" color="gray.950" mr={5}>
            Two-Factor-Authentication
          </Text>
          <Flex flex={1} align="center" justify="space-between">
            <Text className="font-sm font-weight-400 color-gray-text">
              {user?.two_factor_auth_enabled ? '' : 'not set'}
            </Text>
            <Switch
              isChecked={toggle}
              onChange={(e) => handle2FAToggle(e.target.checked)}
              colorScheme="orange"
              border="none"
              focusBorderColor="none"
              _focus={{ border: 'none' }}
              isFocusable={false}
              size="lg"
            />
          </Flex>
        </Stack>
        <ChangePassword />
      </Stack>
    </Box>
  );
};

const ChangePassword: React.FC = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      {!isOpen ? (
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          align={{ base: 'flex-start', sm: 'center' }}
          spacing={5}
          justify={{ base: 'flex-start', sm: 'space-between' }}>
          <Stack
            spacing={'60px'}
            align="center"
            justify={{ base: 'space-between', sm: 'flex-start' }}
            flex={{ base: 1, sm: 0 }}
            direction="row"
            mr={2}>
            <Text color="gray.950" className="font-sm font-weight-400">
              Password
            </Text>
            <Text className="font-sm color-gray-text font-weight-400">
              ****************
            </Text>
          </Stack>
          <Box
            as="button"
            type="button"
            onClick={onOpen}
            borderRadius="10px"
            p="10px 15px"
            _hover={{ bg: 'brand.100', color: '#ffffff' }}
            className="color-primary font-weight-500 font-sm">
            Change Password
          </Box>
        </Stack>
      ) : (
        <ChangePasswordField onClose={onClose} />
      )}
    </Box>
  );
};

const ChangePasswordField: React.FC<Pick<UseDisclosureProps, 'onClose'>> = ({
  onClose,
}): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const { token, success, error, loading } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const {
      success: { changePassword: success },
      errors: { changePassword: error },
    } = state.ajaxStatuses;
    const { changePassword: loading } = state.loadingIndicators;
    return { token, success, error, loading };
  });
  const formik = useFormik({
    initialValues: {
      newPassword: '',
      oldPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: yup.object({
      newPassword: yup
        .string()
        .test('len', 'Password too short', (len) => (len ? len.length >= 8 : false)),
      oldPassword: yup.string().required('Required'),
      confirmNewPassword: yup
        .string()
        .oneOf([yup.ref('newPassword'), undefined], 'Passwords do not match')
        .required('Required'),
    }),
    onSubmit: ({ oldPassword, newPassword, confirmNewPassword }) => {
      dispatch(
        changePasswordRequest({
          token,
          data: {
            old_password: oldPassword,
            new_password1: newPassword,
            new_password2: confirmNewPassword,
          },
        }),
      );
    },
  });
  useEffect(() => {
    if (error)
      toast({
        status: 'error',
        description: error.error,
      });
    if (success) {
      toast({
        status: 'success',
        description: success.message,
      });
      onClose && onClose();
    }
  }, [success, error]);
  return (
    <Box>
      <Text className="font-weight-400 color-dark font-sm" mb={3}>
        Password
      </Text>
      <Stack spacing={3} mb={5} direction={{ base: 'column', sm: 'row' }}>
        <FormControl flex={1}>
          <Input
            placeholder="Old password"
            _placeholder={{ textColor: '#747474', fontSize: '0.8em' }}
            focusBorderColor="none"
            className="font-sm bg-gray-light color-gray-2"
            bg="gray.500"
            border="none"
            {...formik.getFieldProps('oldPassword')}
          />
          <Text as="p" className="color-danger font-weight-500 font-sm">
            {formik.touched.oldPassword && formik.errors.oldPassword}
          </Text>
        </FormControl>
        <FormControl flex={1}>
          <Input
            placeholder="New password"
            _placeholder={{ textColor: '#747474', fontSize: '0.8em' }}
            focusBorderColor="none"
            className="font-sm bg-gray-light color-gray-2"
            bg="gray.500"
            border="none"
            {...formik.getFieldProps('newPassword')}
          />
          <Text as="p" className="color-danger font-weight-500 font-sm">
            {formik.touched.newPassword && formik.errors.newPassword}
          </Text>
        </FormControl>
        <FormControl flex={1}>
          <Input
            placeholder="Confirm new password"
            _placeholder={{ textColor: '#747474', fontSize: '0.8em' }}
            focusBorderColor="none"
            className="font-sm bg-gray-light color-gray-2"
            bg="gray.500"
            border="none"
            {...formik.getFieldProps('confirmNewPassword')}
          />
          <Text as="p" className="color-danger font-weight-500 font-sm">
            {formik.touched.newPassword && formik.errors.confirmNewPassword}
          </Text>
        </FormControl>
      </Stack>
      <Flex justify="flex-end">
        <Box flex={{ base: 1, sm: 0.25 }}>
          <SubmitButton
            disabled={!(formik.dirty && formik.isValid)}
            action={formik.handleSubmit}
            loading={loading}
            className="font-sm"
            py="0px"
            p="5px"
            borderRadius="5px">
            Change password
          </SubmitButton>
        </Box>
      </Flex>
    </Box>
  );
};

export default AccountSecurity;
