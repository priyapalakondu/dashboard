import React from 'react';
import { render, screen } from '@testing-library/react';
import CompanyDetails from './CompanyDetails';

describe('CompanyDetails', () => {
  test('renders company details correctly', () => {
    const name = 'ABC Company';
    const sector = 'Technology';
    const previousNames = 'Previous Name 1, Previous Name 2';
    const color = 'blue';

    render(
      <CompanyDetails
        name={name}
        sector={sector}
        previousNames={previousNames}
        color={color}
      />
    );

    // Assert that the company name is rendered
    const companyName = screen.getByText(name);
    expect(companyName).toBeInTheDocument();

    // Assert that the sector is rendered
    const companySector = screen.getByText(sector);
    expect(companySector).toBeInTheDocument();

    // Assert that the button is rendered
    const detailsButton = screen.getByRole('button', { name: 'Details' });
    expect(detailsButton).toBeInTheDocument();
  });
});
