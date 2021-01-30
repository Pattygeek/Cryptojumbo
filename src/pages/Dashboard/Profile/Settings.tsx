import React, { useEffect, useState } from 'react';
import { Box, Text, Flex, Switch, Stack, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, updateProfileSettingsRequest } from '../../../redux';
import { useAjaxToast } from '../components';

const Settings: React.FC = (): JSX.Element => {
  const toast = useAjaxToast();
  const dispatch = useDispatch();
  const { loading, token, error, success } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const {
      success: { updateProfileSettings: success },
      errors: { updateProfileSettings: error },
    } = state.ajaxStatuses;
    const { updateProfileSettings: loading } = state.loadingIndicators;
    return {
      loading,
      error,
      success,
      token,
    };
  });
  const [toggle, setToggle] = useState<boolean>();
  const handle2FAToggle = (bool: boolean) => {
    dispatch(
      updateProfileSettingsRequest({ token, data: { email_notification: bool } }),
    );
    setToggle(bool);
  };
  useEffect(() => {
    if (error && error.error)
      toast({
        status: 'error',
        description: error.error,
      });
    if (success && success.message) {
      toast({
        status: 'success',
        description: success.message,
      });
    }
  }, [success, error]);
  return (
    <Box className="bg-white card-shadow" borderRadius={10} p={'20px 25px'}>
      <Text className="color-dark font-md font-weight-500" mb={5}>
        Settings
      </Text>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        align={{ base: 'space-between', sm: 'center' }}
        spacing={2}>
        <Text className="font-sm font-weight-400 color-dark" mr={5}>
          Email notifications
        </Text>
        <Flex flex={1} align="center" justify="space-between">
          <Text className="font-sm font-weight-400 color-gray-text">Enabled</Text>
          <Stack direction="row" spacing={2}>
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
            {loading && <Spinner size="md" color="brand.100" />}
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Settings;
