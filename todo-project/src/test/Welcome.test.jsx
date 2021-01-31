import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from '../components/Welcome';
import * as redux from 'react-redux';

const spy = jest.spyOn(redux, 'useSelector');
spy.mockReturnValue(false);

describe('Test welcome component', () => {

  it('test 1', () => {
    render(<Welcome/>);

    expect(screen.getByText('Please login and enjoy :)')).toBe('dqqd');

  });

});