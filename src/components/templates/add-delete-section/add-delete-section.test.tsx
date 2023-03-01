import React from 'react';
import {AddDeleteSection} from './add-delete-section';
import {render} from '@testing-library/react-native';
import AddIcon from '../../../utils/assets/AddIcon.png';
import {SUCCESS} from '../../../utils/constants/strings-constants';

describe('AddDeleteSection', () => {
  test('Should render a component', () => {
    const myAddDeleteSectiion = render(
      <AddDeleteSection
        searchImage={AddIcon}
        onChangeTextInput={jest.fn}
        onPressAddGif={jest.fn}
        searchPlaceholder={'Gif'}
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
        onPressDeleteIcon={jest.fn}
        gifError=""
        gifStatus={SUCCESS}
      />,
    );

    expect(myAddDeleteSectiion).toBeDefined();
  });
});
