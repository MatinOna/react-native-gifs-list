import React, {FC} from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  View,
  ViewProps,
} from 'react-native';
import {AddText, CardDelete} from '../../molecules';
import {Gif} from '../../../utils/interfaces/gift-interface';
import {styles} from './add-delete-section.styles';
import {Typography} from '../../atoms';

interface AddDeleteSectionProps {
  style?: ViewProps;
  searchImage: ImageSourcePropType;
  onChangeTextInput: (text: string) => void;
  onPressAddGif: (event: GestureResponderEvent) => void;
  searchPlaceholder: string;
  gifs: Gif[];
  gifError: string;
  gifStatus: string;
  onPressDeleteIcon: (gif: Gif) => void;
}

const AddDeleteSection: FC<AddDeleteSectionProps> = ({
  style,
  searchImage,
  onChangeTextInput,
  onPressAddGif,
  searchPlaceholder,
  gifs,
  gifError,
  gifStatus,
  onPressDeleteIcon,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.title}>
        <Typography>GIF Gallery</Typography>
      </View>
      <AddText
        image={searchImage}
        onChangeTextInput={onChangeTextInput}
        onPressAddGif={onPressAddGif}
        placeholder={searchPlaceholder}
      />
      <CardDelete
        data={gifs}
        dataError={gifError}
        dataStatus={gifStatus}
        onPressDeleteIcon={onPressDeleteIcon}
      />
    </View>
  );
};

export {AddDeleteSection};
