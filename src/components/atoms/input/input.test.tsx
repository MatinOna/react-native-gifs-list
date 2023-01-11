import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Input} from './input';

describe('Input Component', () => {
  const PLACE_HOLDER_ID_MOCK = 'GIF';

  test('should render a placeholder', () => {
    const {getByPlaceholderText} = render(
      <Input
        placeholder={PLACE_HOLDER_ID_MOCK}
        onChangeTextInput={jest.fn()}
      />,
    );

    expect(getByPlaceholderText(PLACE_HOLDER_ID_MOCK)).toBeDefined();
  });

  test('should call onChangeText', () => {
    const onChangeTextMock = jest.fn();

    const {getByPlaceholderText} = render(
      <Input
        placeholder={PLACE_HOLDER_ID_MOCK}
        onChangeTextInput={onChangeTextMock}
      />,
    );

    fireEvent.changeText(
      getByPlaceholderText(PLACE_HOLDER_ID_MOCK),
      PLACE_HOLDER_ID_MOCK,
    );

    expect(onChangeTextMock).toBeCalled();
    expect(onChangeTextMock).toBeCalledWith(PLACE_HOLDER_ID_MOCK);
  });
});
