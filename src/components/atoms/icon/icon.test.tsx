import React from 'react';
import {Icon} from './icon';
import DeleteIcon from '../../../utils/assets/DeleteIcon.png';
import {fireEvent, render} from '@testing-library/react-native';

describe('Icon Component', () => {
  const ICON_ID = 'iconID';

  test('Should render an image', () => {
    const {getByTestId} = render(<Icon image={DeleteIcon} />);

    expect(getByTestId(ICON_ID).props.source).toBe(DeleteIcon);
  });

  test('should call onPress', () => {
    const onPressMock = jest.fn();
    const uri =
      'https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif';

    const {getByTestId} = render(
      <Icon image={DeleteIcon} onPressIcon={onPressMock} />,
    );

    fireEvent.press(getByTestId(ICON_ID), uri);
    expect(onPressMock).toBeCalledWith(uri);
  });

  test('should render a text', () => {
    const {getByText} = render(
      <Icon image={DeleteIcon} description={ICON_ID} />,
    );

    expect(getByText(ICON_ID)).toBeDefined();
  });
});
