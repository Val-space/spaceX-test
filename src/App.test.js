import { render, screen } from '@testing-library/react';
import App from './App';


test('renders App', () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
  // expect(screen.getAllByRole('button')).toBeInTheDocument();
});

test('loads and displays greeting', async () => {
  // Arrange
  // Act
  // Assert
})