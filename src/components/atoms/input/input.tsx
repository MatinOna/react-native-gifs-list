import React, {FC} from 'react';

import {TextInput, TextInputProps} from 'react-native';
import {styles} from './input.styles';

interface InputProps {
  style?: TextInputProps;
  onChangeTextInput: (text: string) => void;
  placeholder: string;
}

const Input: FC<InputProps> = ({style, onChangeTextInput, placeholder}) => {
  return (
    <TextInput
      style={[styles.inputSearch, style]}
      placeholder={placeholder}
      onChangeText={onChangeTextInput}
    />
  );
};

export {Input};
