import React, {FC} from 'react';
import {Text, TextProps} from 'react-native';
import {styles} from './typography.styles';

interface TypographyProps {
  style?: TextProps;
  children: React.ReactNode;
}

const Typography: FC<TypographyProps> = ({style, children}) => {
  return <Text style={[styles.typography, style]}>{children}</Text>;
};

export {Typography};
