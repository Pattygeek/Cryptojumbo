import React, { useState, memo } from 'react';
import {
  FormControl,
  FormControlProps,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  Text,
} from '@chakra-ui/react';
import ClipLoader from 'react-spinners/ClipLoader';

export interface GlobalProps
  extends Pick<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
  formHelperText?: string;
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
}
export type FormInputProps = GlobalProps &
  FormControlProps & {
    type?: string;
    labelClassName?: string;
  };
export const FormInput: React.FC<FormInputProps> = memo(
  ({
    formHelperText,
    type = 'text',
    name,
    value,
    label,
    placeholder,
    errorText,
    onChange,
    labelClassName,
    ...rest
  }) => {
    return (
      <FormControl mb={5} {...rest}>
        <FormLabel
          htmlFor={name}
          className={`color-gray-text font-weight-400 ${labelClassName}`}>
          {label}
        </FormLabel>
        <Input
          type={type}
          value={value}
          name={name}
          id={name}
          placeholder={placeholder}
          aria-describedby={`${name}-helper-text`}
          onChange={onChange}
        />
        <Text as="p" className="color-error font-weight-500 font-sm">
          {errorText}
        </Text>
        <FormHelperText id={`${name}-helper-text`}>{formHelperText}</FormHelperText>
      </FormControl>
    );
  },
  (prev, next) => prev.value === next.value,
);

declare interface SelectProps extends ChakraSelectProps {
  label?: string;
  options: string[];
}
export const Select: React.FC<SelectProps> = ({
  label,
  options,
  ...rest
}): JSX.Element => {
  return (
    <Box mb={5}>
      <Text as="label" className="font-weight-500 font-sm margin-bottom-xs">
        {label}
      </Text>
      <ChakraSelect {...rest} _placeholder={{ color: 'color-gray-text' }}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </ChakraSelect>
    </Box>
  );
};

declare interface SubmitButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  action: () => void;
  loading?: boolean;
  disabled?: boolean;
}
export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  action,
  loading,
  disabled,
}): JSX.Element => {
  return (
    <Box
      as="button"
      width="full"
      type="button"
      textAlign="center"
      className="bg-primary color-white btn"
      onClick={action}
      disabled={disabled}>
      {!loading ? children : <ClipLoader size={20} color="#fff" loading={loading} />}
    </Box>
  );
};
