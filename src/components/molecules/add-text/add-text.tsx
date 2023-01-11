import React, {FC} from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  View,
  ViewProps,
} from 'react-native';
import {Icon, Input} from '../../atoms';
import {styles} from './add-text.styles';

interface AddTextProps {
  style?: ViewProps;
  image: ImageSourcePropType;
  onChangeTextInput: (text: string) => void;
  onPressAddGif: (event: GestureResponderEvent) => void;
  placeholder: string;
}

const AddText: FC<AddTextProps> = ({
  style,
  image,
  onChangeTextInput,
  onPressAddGif,
  placeholder,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputContainer}>
        <Input
          placeholder={placeholder}
          onChangeTextInput={onChangeTextInput}
        />
      </View>
      <Icon image={image} onPressIcon={onPressAddGif} />
    </View>
  );
};

export {AddText};
