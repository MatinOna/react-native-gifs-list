import React from 'react';
import {AddText} from './add-text';
import {fireEvent, render} from '@testing-library/react-native';
import AddIcon from '../../../utils/assets/AddIcon.png';

describe('AddText Component', () => {
  const PLACE_HOLDER_MOCK = 'GIF';
  const ICON_ID = 'iconID';

  test('Should render a component', () => {
    const myAddText = render(
      <AddText
        image={AddIcon}
        onChangeTextInput={jest.fn}
        placeholder={PLACE_HOLDER_MOCK}
        onPressAddGif={jest.fn}
      />,
    );

    expect(myAddText).toBeDefined();
  });

  test('should render a placeholder', () => {
    const {getByPlaceholderText} = render(
      <AddText
        image={AddIcon}
        onChangeTextInput={jest.fn}
        placeholder={PLACE_HOLDER_MOCK}
        onPressAddGif={jest.fn}
      />,
    );

    expect(getByPlaceholderText(PLACE_HOLDER_MOCK)).toBeDefined();
  });

  test('should call onChangeText', () => {
    const onChangeTextMock = jest.fn();

    const {getByPlaceholderText} = render(
      <AddText
        image={AddIcon}
        onChangeTextInput={onChangeTextMock}
        placeholder={PLACE_HOLDER_MOCK}
        onPressAddGif={jest.fn}
      />,
    );

    fireEvent.changeText(
      getByPlaceholderText(PLACE_HOLDER_MOCK),
      PLACE_HOLDER_MOCK,
    );

    expect(onChangeTextMock).toBeCalled();
    expect(onChangeTextMock).toBeCalledWith(PLACE_HOLDER_MOCK);
  });

  test('Should render an image', () => {
    const {getByTestId} = render(
      <AddText
        image={AddIcon}
        onChangeTextInput={jest.fn}
        placeholder={PLACE_HOLDER_MOCK}
        onPressAddGif={jest.fn}
      />,
    );

    expect(getByTestId(ICON_ID).props.source).toBe(AddIcon);
  });
});
