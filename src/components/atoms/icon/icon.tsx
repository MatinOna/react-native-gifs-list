import React, {FC} from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageProps,
  ImageSourcePropType,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import {styles} from './icon.styles';

type IconProps = {
  style?: ImageProps;
  onPressIcon?: (event: GestureResponderEvent) => void;
  image: ImageSourcePropType;
  description?: string;
};

const Icon: FC<IconProps> = ({style, onPressIcon, image, description}) => {
  return (
    <View>
      <TouchableHighlight onPress={onPressIcon}>
        <Image testID="iconID" source={image} style={[styles.icon, style]} />
      </TouchableHighlight>
      {description && description.length > 0 && (
        <Text style={styles.description}>{description}</Text>
      )}
    </View>
  );
};

export {Icon};
