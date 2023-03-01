import React from 'react';
import {CardDelete} from './card-delete';
import {render} from '@testing-library/react-native';
import {SUCCESS} from "../../../utils/constants/strings-constants";

describe('CardDelete Component', () => {
  const DATA_MOCK = [
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
  ];

  test('Should render a component', () => {
    const myCardDelete = render(
      <CardDelete onPressDeleteIcon={jest.fn} data={DATA_MOCK} dataError='' dataStatus={SUCCESS}/>,
    );

    expect(myCardDelete).toBeDefined();
  });
});
