import React from 'react';
import { Box, Flex, Text, Center } from '@chakra-ui/react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { BsExclamationCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export interface TransactionStatusProps {
  status?: 'success' | 'failure';
  statusTitle: string;
  statusMessage: string;
  linkTitle?: string;
  linkValue?: string;
}
export const TransactionStatus: React.FC<TransactionStatusProps> = ({
  status,
  statusTitle,
  statusMessage,
  linkTitle,
  linkValue,
}): JSX.Element => {
  const colors =
    status === 'success'
      ? { bg: 'bg-primary-gradient', color: 'color-primary' }
      : { bg: 'bg-danger', color: 'color-danger' };
  return (
    <Box>
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        height="400px"
        width={{ base: '100%', sm: '330px' }}
        py={10}
        px="15px"
        borderRadius={10}
        className={`${colors.bg}`}>
        <Box px={5}>
          <Center direction="column" pb={5}>
            {status === 'success' ? (
              <IoIosCheckmarkCircleOutline size={70} className="color-white" />
            ) : (
              <BsExclamationCircle size={70} className="color-white" />
            )}
          </Center>
          <Text
            textAlign="center"
            mb={10}
            className="font-weight-500 color-white font-md">
            {statusTitle}
          </Text>
          <Text
            textAlign="center"
            verticalAlign="middle"
            className="font-weight-400 color-white font-sm">
            {statusMessage}
          </Text>
        </Box>
        {linkValue && (
          <Box
            px={10}
            as={Link}
            to={linkValue}
            className={`btn bg-white ${colors.color}`}>
            {linkTitle}
          </Box>
        )}
      </Flex>
    </Box>
  );
};
