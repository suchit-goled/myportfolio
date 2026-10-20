import { render, screen } from '@testing-library/react';
import App from './App';

describe('Suchit Goled Developer Portfolio Tests', () => {
  test('renders author name and main engineering headline', () => {
    render(<App />);
    const authorHeadings = screen.getAllByText(/suchit goled/i);
    expect(authorHeadings.length).toBeGreaterThan(0);
    const institutionTexts = screen.getAllByText(/acharya institute/i);
    expect(institutionTexts.length).toBeGreaterThan(0);
  });

  test('renders navigation bar with key sections', () => {
    render(<App />);
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getAllByText(/about/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/projects/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/skills/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/certificates/i).length).toBeGreaterThan(0);
  });

  test('renders resume download actions with correct href', () => {
    render(<App />);
    const resumeLinks = screen.getAllByRole('link', { name: /resume/i });
    expect(resumeLinks.length).toBeGreaterThan(0);
    resumeLinks.forEach((link) => {
      expect(link.getAttribute('href')).toMatch(/Suchit_Resume1/i);
    });
  });

  test('renders featured projects including Smart Bandage and Electronova', () => {
    render(<App />);
    expect(screen.getAllByText(/ai \+ iot smart bandage/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/electronova/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ai product catalog generator/i).length).toBeGreaterThan(0);
  });

  test('renders experience and education track record', () => {
    render(<App />);
    expect(screen.getAllByText(/full stack web development intern/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/7.9 \/ 10/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/build for bengaluru hackathon 2025/i).length).toBeGreaterThan(0);
  });

  test('renders direct contact channels and copy email functionality', () => {
    render(<App />);
    expect(screen.getAllByText(/suchitgoled@gmail.com/i).length).toBeGreaterThan(0);
    const copyBtn = screen.getByRole('button', { name: /copy email/i });
    expect(copyBtn).toBeInTheDocument();
  });
});
