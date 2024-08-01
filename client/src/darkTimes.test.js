import { render, screen } from '@testing-library/react';
import DarkTimes from './DarkTimes';

test('renders learn react link', () => {
  render(<DarkTimes />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
