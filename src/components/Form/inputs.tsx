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
  Textarea as ChakraTextarea,
  Text,
  BoxProps,
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
    inputBg?: string;
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
    inputBg,
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
          focusBorderColor="brand.100"
          bg={inputBg}
        />
        <Text as="p" className="color-danger font-weight-500 font-sm">
          {errorText}
        </Text>
        <FormHelperText id={`${name}-helper-text`}>{formHelperText}</FormHelperText>
      </FormControl>
    );
  },
  (prev, next) => prev.value === next.value,
);

declare type TextAreaProps = Omit<GlobalProps, 'onChange'> &
  Pick<React.HTMLAttributes<HTMLTextAreaElement>, 'onChange'> &
  FormControlProps & {
    labelClassName?: string;
    inputBg?: string;
  };
export const TextArea: React.FC<TextAreaProps> = ({
  name,
  value,
  label,
  placeholder,
  onChange,
  labelClassName,
  inputBg,
  ...rest
}) => {
  return (
    <FormControl {...rest} mb={5}>
      <FormLabel
        htmlFor={name}
        className={`color-gray-text font-weight-400 ${labelClassName}`}>
        {label}
      </FormLabel>
      <ChakraTextarea
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        aria-describedby={`${name}-helper-text`}
        onChange={onChange}
        focusBorderColor="brand.100"
        bg={inputBg}
      />
    </FormControl>
  );
};

declare interface SelectProps extends ChakraSelectProps {
  label?: string;
  labelClassName?: string;
  options: string[];
  optionClassName?: string;
}
export const Select: React.FC<SelectProps> = ({
  label,
  options,
  labelClassName,
  optionClassName,
  ...rest
}): JSX.Element => {
  return (
    <Box mb={5}>
      <Text
        as="label"
        className={`font-weight-500 font-sm margin-bottom-xs ${labelClassName}`}>
        {label}
      </Text>
      <ChakraSelect {...rest} _placeholder={{ color: 'color-gray-text' }}>
        {options.map((option) => (
          <option className={optionClassName} key={option} value={option}>
            {option}
          </option>
        ))}
      </ChakraSelect>
    </Box>
  );
};

declare interface SubmitButtonProps extends BoxProps {
  action: () => void;
  loading?: boolean;
  disabled?: boolean;
  spinColor?: 'white' | 'primary' | 'secondary';
  validClassName?: string;
  inValidClassName?: string;
}
export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  action,
  loading,
  disabled,
  className,
  inValidClassName,
  validClassName,
  spinColor = 'white',
  ...rest
}): JSX.Element => {
  const colors = {
    white: '#fff',
    primary: '#f77408',
    secondary: '#172434',
  };
  return (
    <Box
      as="button"
      width="full"
      type="button"
      textAlign="center"
      py="10px"
      className={`${
        disabled
          ? inValidClassName || 'btn-disabled'
          : validClassName || 'bg-primary color-white btn'
      } ${className}`}
      onClick={action}
      disabled={disabled}
      {...rest}>
      {!loading ? (
        children
      ) : (
        <ClipLoader size={20} color={colors[spinColor]} loading={loading} />
      )}
    </Box>
  );
};
