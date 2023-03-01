import React from 'react';
import {View} from 'react-native';
import AddIcon from '../../../utils/assets/AddIcon.png';
import {AddDeleteSection} from '../../templates';
import {styles} from './main.styles';
import {ERROR, LOADING} from '../../../utils/constants/strings-constants';
import {Icon} from '../../atoms';
import DeleteIcon from '../../../utils/assets/DeleteIcon.png';
import WarningIcon from '../../../utils/assets/WarningIcon.png';
import {useMain} from './use-main/use-main';

const Main = () => {
  const {
    gifData,
    gifError,
    gifStatus,
    addGifError,
    addGifStatus,
    setGifUrl,
    onPressAddGif,
    onPressDeleteGif,
  } = useMain();

  if (addGifStatus === ERROR)
    return (
      <View style={styles.container}>
        <Icon description={addGifError} image={DeleteIcon} />
      </View>
    );

  if (addGifStatus === LOADING)
    return (
      <View style={styles.container}>
        <Icon description={LOADING} image={WarningIcon} />
      </View>
    );

  return (
    <View style={styles.container}>
      <AddDeleteSection
        searchImage={AddIcon}
        onChangeTextInput={input => setGifUrl(input)}
        onPressAddGif={onPressAddGif}
        searchPlaceholder="GIF"
        gifs={gifData}
        gifError={gifError}
        gifStatus={gifStatus}
        onPressDeleteIcon={onPressDeleteGif}
      />
    </View>
  );
};

export {Main};
