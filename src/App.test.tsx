import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import  MarkdownGuide from './components/MarkdownGuide/MarkdownGuide';

test('renders text input', () => {
  render(<MarkdownGuide />);
  const textarea = screen.getByRole('textbox');
  expect(textarea).toBeInTheDocument();
});
