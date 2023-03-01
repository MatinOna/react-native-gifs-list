import React, {FC} from 'react';
import {
  FlatList,
  GestureResponderEvent,
  Image,
  ScrollViewProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './card-delete.styles';
import {Gif} from '../../../utils/interfaces/gift-interface';
import {Icon} from '../../atoms';
import DeleteIcon from '../../../utils/assets/DeleteIcon.png';
import WarningIcon from '../../../utils/assets/WarningIcon.png';
import {ERROR, LOADING} from '../../../utils/constants/strings-constants';

interface CardDeleteProps {
  style?: ScrollViewProps;
  onPressDeleteIcon: (gif: Gif) => void;
  data: Gif[];
  dataError: string;
  dataStatus: string;
}

const CardDelete: FC<CardDeleteProps> = ({
  style,
  onPressDeleteIcon,
  data,
  dataError,
  dataStatus,
}) => {
  if (dataStatus === ERROR)
    return <Icon description={dataError} image={DeleteIcon} />;

  if (dataStatus === LOADING)
    return <Icon description={LOADING} image={WarningIcon} />;

  return (
    <FlatList
      style={style}
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={item => {
        console.log('RENDER ITEM')
        return (
        <View>
          <Image
            style={styles.card}
            source={{
              uri: item.item.url,
            }}
          />
          <View style={styles.closeButton}>
            <Icon
              image={DeleteIcon}
              onPressIcon={() => {
                onPressDeleteIcon(item.item);
              }}
            />
          </View>
        </View>
      )}}
    />
  );
};

export {CardDelete};
