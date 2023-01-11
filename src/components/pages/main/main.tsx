import React from 'react';
import {View} from 'react-native';
import AddIcon from '../../../utils/assets/AddIcon.png';
import {AddDeleteSection} from '../../templates';
import {styles} from './main.styles';

const Main = () => {
  return (
    <View style={styles.container}>
      <AddDeleteSection
        searchImage={AddIcon}
        onChangeTextInput={input => console.log(input)}
        onPressAddGif={() => console.log('click')}
        searchPlaceholder="GIF"
        gifs={[
          {
            id: 503,
            url: 'https://media.tenor.com/mmlF_mTw310AAAAi/doctor-strange-in-the-multiverse-of-madness-doctor-strange.gif',
            author_id: 28,
          },
          {
            id: 504,
            url: 'https://media.tenor.com/mmlF_mTw310AAAAi/doctor-strange-in-the-multiverse-of-madness-doctor-strange.gif',
            author_id: 28,
          },
          {
            id: 505,
            url: 'https://media.tenor.com/mmlF_mTw310AAAAi/doctor-strange-in-the-multiverse-of-madness-doctor-strange.gif',
            author_id: 28,
          },
        ]}
        onPressDeleteIcon={() => console.log('delete')}
      />
    </View>
  );
};

export {Main};
