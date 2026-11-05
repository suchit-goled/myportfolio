import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('SUCHIT ORIGINALS Netflix-Inspired Portfolio Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders Who is Watching profile selection screen on first load', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /who's watching\?/i })).toBeInTheDocument();
    expect(screen.getByText(/recruiter/i)).toBeInTheDocument();
    expect(screen.getByText(/developer/i)).toBeInTheDocument();
    expect(screen.getByText(/explorer/i)).toBeInTheDocument();
    expect(screen.getByText(/everyone/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /continue/i })).toBeInTheDocument();
  });

  test('transitions to full homepage when profile is chosen', () => {
    localStorage.setItem('suchit_netflix_profile', 'everyone');
    render(<App />);

    // Check Hero and Brand
    expect(screen.getAllByText(/suchit originals/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { level: 1, name: /suchit goled/i })).toBeInTheDocument();
    expect(screen.getByText(/the series/i)).toBeInTheDocument();

    // Check Continue Exploring
    expect(screen.getByRole('heading', { name: /continue exploring/i })).toBeInTheDocument();
    expect(screen.getByText(/the full story/i)).toBeInTheDocument();

    // Check Top Moments
    expect(screen.getByRole('heading', { name: /top moments/i })).toBeInTheDocument();
    expect(screen.getByText(/icoicet 2026/i)).toBeInTheDocument();

    // Check My Journey
    expect(screen.getByRole('heading', { name: /my journey/i })).toBeInTheDocument();
    expect(screen.getByText(/the ai builder/i)).toBeInTheDocument();
    expect(screen.getByText(/the engineer/i)).toBeInTheDocument();

    // Check Project Showcase
    expect(screen.getByText(/ai-powered smart bandage/i)).toBeInTheDocument();
    expect(screen.getByText(/smart inhaler system/i)).toBeInTheDocument();
    expect(screen.getByText(/pharmaceutical crm/i)).toBeInTheDocument();

    // Check Skills
    expect(screen.getByRole('heading', { name: /my skills/i })).toBeInTheDocument();

    // Check Contact
    expect(screen.getByRole('heading', { name: /contact me/i })).toBeInTheDocument();
    expect(screen.getAllByText(/suchitgoled@gmail.com/i).length).toBeGreaterThan(0);
  });

  test('renders working resume links pointing to Suchit resume asset', () => {
    localStorage.setItem('suchit_netflix_profile', 'recruiter');
    render(<App />);
    const resumeLinks = screen.getAllByRole('link', { name: /resume/i });
    expect(resumeLinks.length).toBeGreaterThan(0);
    resumeLinks.forEach((link) => {
      expect(link.getAttribute('href')).toMatch(/Suchit_Resume1/i);
    });
  });

  test('clicking continue on profile selection advances to portfolio', () => {
    render(<App />);
    const continueBtn = screen.getByRole('button', { name: /continue/i });
    fireEvent.click(continueBtn);

    expect(screen.getByRole('heading', { level: 1, name: /suchit goled/i })).toBeInTheDocument();
  });
});
