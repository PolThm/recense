import { render, screen } from '@testing-library/react';

import CensusSummary from '@/components/CensusSummary';
import censusesMock from '@/mocks/CensusesMock';

describe('CensusSummary', () => {
  const defaultProps = { census: censusesMock[0] };

  it('should render the correct first name', () => {
    render(<CensusSummary {...defaultProps} />);
    expect(screen.getByText(defaultProps.census.firstName)).toBeInTheDocument();
  });

  it('should render the correct last name', () => {
    render(<CensusSummary {...defaultProps} />);
    expect(screen.getByText(defaultProps.census.lastName)).toBeInTheDocument();
  });

  it('should render the correct email', () => {
    render(<CensusSummary {...defaultProps} />);
    expect(screen.getByText(defaultProps.census.email)).toBeInTheDocument();
  });

  it('should render the correct phone', () => {
    render(<CensusSummary {...defaultProps} />);
    expect(
      screen.getByText(defaultProps.census.phone as string)
    ).toBeInTheDocument();
  });

  it('should render the correct age', () => {
    render(<CensusSummary {...defaultProps} />);
    expect(
      screen.getByText(defaultProps.census.age as number)
    ).toBeInTheDocument();
  });

  it('should render the correct gender', () => {
    render(<CensusSummary {...defaultProps} />);
    expect(screen.getByText(defaultProps.census.gender)).toBeInTheDocument();
  });

  it('should render the correct situation', () => {
    render(<CensusSummary {...defaultProps} />);
    expect(screen.getByText(defaultProps.census.situation)).toBeInTheDocument();
  });

  it('should render the correct education', () => {
    render(<CensusSummary {...defaultProps} />);
    expect(screen.getByText(defaultProps.census.education)).toBeInTheDocument();
  });

  it('should render the correct income', () => {
    render(<CensusSummary {...defaultProps} />);
    expect(
      screen.getByText(defaultProps.census.income as number)
    ).toBeInTheDocument();
  });

  it('should render the correct lodging type', () => {
    render(<CensusSummary {...defaultProps} />);
    expect(
      screen.getByText(defaultProps.census.lodgingType)
    ).toBeInTheDocument();
  });

  it('should render the correct location', () => {
    render(<CensusSummary {...defaultProps} />);
    expect(screen.getByText(defaultProps.census.location)).toBeInTheDocument();
  });

  it('should render the correct residents', () => {
    render(<CensusSummary {...defaultProps} />);
    expect(
      screen.getByText(defaultProps.census.residents as number)
    ).toBeInTheDocument();
  });
});
