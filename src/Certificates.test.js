import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Certificates from './Certificates';

describe('Certificates & Achievements Page Tests', () => {
  const renderCertificates = () => {
    return render(
      <BrowserRouter>
        <Certificates />
      </BrowserRouter>
    );
  };

  test('renders page title and credentials', () => {
    renderCertificates();
    expect(screen.getByRole('heading', { level: 1, name: /certificates/i })).toBeInTheDocument();
    expect(screen.getAllByText(/infosys springboard/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/coursera/i).length).toBeGreaterThan(0);
  });

  test('renders category filters and allows switching', () => {
    renderCertificates();
    const hackathonsFilter = screen.getByRole('tab', { name: /hackathons/i });
    expect(hackathonsFilter).toBeInTheDocument();
    fireEvent.click(hackathonsFilter);
    expect(screen.getByText(/build for bengaluru hackathon 2025/i)).toBeInTheDocument();
  });

  test('opens modal when inspect document button is clicked', () => {
    renderCertificates();
    const inspectBtns = screen.getAllByRole('button', { name: /inspect document/i });
    expect(inspectBtns.length).toBeGreaterThan(0);
    fireEvent.click(inspectBtns[0]);
    expect(screen.getByRole('dialog', { name: /certificate preview modal/i })).toBeInTheDocument();
    const closeBtn = screen.getByRole('button', { name: /close certificate preview/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByRole('dialog', { name: /certificate preview modal/i })).not.toBeInTheDocument();
  });
});
