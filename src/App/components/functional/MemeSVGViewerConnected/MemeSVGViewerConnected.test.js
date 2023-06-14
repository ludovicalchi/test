import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeSvgViewerConnected from './MemeSvgViewerConnected/MemeSvgViewerConnected';

describe('<MemeSvgViewerConnected />', () => {
  test('it should mount', () => {
    render(<MemeSvgViewerConnected />);
    
    const memeSvgViewerConnected = screen.getByTestId('MemeSvgViewerConnected');

    expect(memeSvgViewerConnected).toBeInTheDocument();
  });
});