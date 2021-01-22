import React, { useState } from 'react';
import { Box, Text, Flex, Switch, Stack } from '@chakra-ui/react';

const Settings: React.FC = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>();
  const handle2FAToggle = (bool: boolean) => {
    setToggle(bool);
  };
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
    </Box>
  );
};

export default Settings;
