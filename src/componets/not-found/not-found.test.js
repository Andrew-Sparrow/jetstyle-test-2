import NotFound from './not-found';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <NotFound />
      </Router>
    );

    const headerElement = screen.getByText('Page Not Found');
    const linkElement = screen.getByText('Return to main page');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  })
});
