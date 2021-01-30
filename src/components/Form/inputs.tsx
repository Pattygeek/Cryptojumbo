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
  InputGroup,
  InputRightElement,
  InputProps,
} from '@chakra-ui/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { FaEye } from 'react-icons/fa';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

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
    inputProps?: InputProps;
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
    inputProps,
    ...rest
  }) => {
    return (
      <FormControl mb={'15px'} {...rest}>
        <Text
          htmlFor={name}
          fontSize={{ base: '11px', md: '14px' }}
          lineHeight="16px"
          mb="5px"
          className={`color-gray-text font-weight-400 ${labelClassName}`}>
          {label}
        </Text>
        <Input
          type={type}
          value={value}
          name={name}
          id={name}
          placeholder={placeholder}
          _placeholder={{ color: '#CBCBCB', fontSize: { base: '11px', md: '14px' } }}
          aria-describedby={`${name}-helper-text`}
          onChange={onChange}
          focusBorderColor="brand.100"
          bg={inputBg}
          {...inputProps}
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

export const PasswordInput: React.FC<FormInputProps> = memo(
  ({
    formHelperText,
    name,
    value,
    label,
    placeholder,
    errorText,
    onChange,
    labelClassName,
    inputBg,
    inputProps,
    ...rest
  }) => {
    const [type, setType] = useState<'password' | 'text'>('password');
    return (
      <FormControl mb={'15px'} {...rest}>
        <Text
          htmlFor={name}
          fontSize={{ base: '11px', md: '14px' }}
          lineHeight="16px"
          mb="5px"
          className={`color-gray-text font-weight-400 ${labelClassName}`}>
          {label}
        </Text>
        <InputGroup>
          <InputRightElement>
            <Box onClick={() => setType(type === 'password' ? 'text' : 'password')}>
              {type === 'text' ? (
                <BsEyeSlash size="15px" className="color-gray-text" />
              ) : (
                <BsEye size="15px" className="color-gray-text" />
              )}
            </Box>
          </InputRightElement>
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
            pr="25px"
            _placeholder={{
              color: '#CBCBCB',
              fontSize: { base: '11px', md: '14px' },
            }}
            {...inputProps}
          />
        </InputGroup>
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
    <FormControl mb={'15px'} {...rest}>
      <Text
        htmlFor={name}
        fontSize={{ base: '11px', md: '14px' }}
        lineHeight="16px"
        mb="5px"
        className={`color-gray-text font-weight-400 ${labelClassName}`}>
        {label}
      </Text>
      <ChakraTextarea
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        aria-describedby={`${name}-helper-text`}
        onChange={onChange}
        focusBorderColor="brand.100"
        bg={inputBg}
        _placeholder={{ color: '#CBCBCB', fontSize: { base: '11px', md: '14px' } }}
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
    <Box mb={'15px'}>
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
