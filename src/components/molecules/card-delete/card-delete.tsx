import React, {FC} from 'react';
import {
  FlatList,
  GestureResponderEvent,
  Image,
  ScrollViewProps,
  View,
} from 'react-native';
import {styles} from './card-delete.styles';
import {Gif} from '../../../utils/interfaces/gift-interface';
import {Icon} from '../../atoms';
import DeleteIcon from '../../../utils/assets/DeleteIcon.png';

interface CardDeleteProps {
  style?: ScrollViewProps;
  onPressDeleteIcon: (event: GestureResponderEvent) => void;
  data: Gif[];
}

const CardDelete: FC<CardDeleteProps> = ({style, onPressDeleteIcon, data}) => {
  return (
    <FlatList
      style={style}
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={item => (
        <View>
          <Image
            style={styles.card}
            source={{
              uri: item.item.url,
            }}
          />
          <View style={styles.closeButton}>
            <Icon image={DeleteIcon} onPressIcon={onPressDeleteIcon} />
          </View>
        </View>
      )}
    />
  );
};

export {CardDelete};
