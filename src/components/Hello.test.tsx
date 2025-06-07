import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

function Hello() {
  return <h1>Hello, world!</h1>;
}

describe('Hello component', () => {
  it('renders the correct text', () => {
    render(<Hello />);
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });
}); 