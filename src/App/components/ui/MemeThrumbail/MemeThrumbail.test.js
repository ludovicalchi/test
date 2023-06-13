import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeThrumbail from './MemeThrumbail';

describe('<MemeThrumbail />', () => {
  test('it should mount', () => {
    render(<MemeThrumbail />);
    
    const memeThrumbail = screen.getByTestId('MemeThrumbail');

    expect(memeThrumbail).toBeInTheDocument();
  });
});