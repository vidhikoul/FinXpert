import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';

// making Test  suite(giving multiple test cases)
describe('Hero', () => {
  // making test case
  test('renders Hero component', () => {
    render(<Hero />);
    // checking if the text is present in the component
    expect(screen.getByAltText('Hero Image')).toBeInTheDocument();
    expect(screen.getByAltText('Hero Image')).toHaveAttribute("src","/media/homeHero.png");
  });
});
