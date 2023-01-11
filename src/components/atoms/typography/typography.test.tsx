import React from 'react';
import {render} from '@testing-library/react-native';
import {Typography} from './typography';

describe('Typography Component', () => {
  test('should render a text', () => {
    const {getByText} = render(<Typography>GIF Gallery</Typography>);

    expect(getByText('GIF Gallery')).toBeDefined();
  });
});
