import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

describe('Project Detail Page Tests', () => {
  test('renders AI Smart Bandage project details with hardware specs', () => {
    render(
      <BrowserRouter>
        <ProjectDetail explicitId="ai-smart-bandage" />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /ai \+ iot smart bandage/i })).toBeInTheDocument();
    expect(screen.getByText(/esp32 dev module/i)).toBeInTheDocument();
    expect(screen.getByText(/key capabilities & implementation/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back to projects/i })).toBeInTheDocument();
  });

  test('renders Electronova MERN platform project details', () => {
    render(
      <BrowserRouter>
        <ProjectDetail explicitId="electronova" />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /electronova/i })).toBeInTheDocument();
    expect(screen.getByText(/full-stack mern architecture/i)).toBeInTheDocument();
  });
});
