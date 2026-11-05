import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

describe('Project Detail Page Tests', () => {
  test('renders AI Smart Bandage project details with telemetry HUD and hardware specs', () => {
    render(
      <BrowserRouter>
        <ProjectDetail explicitId="ai-smart-bandage" />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /ai-powered smart bandage/i })).toBeInTheDocument();
    expect(screen.getByText(/esp32 dev module/i)).toBeInTheDocument();
    expect(screen.getByText(/telemetry status/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /back to projects/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /watch demo/i })).toBeInTheDocument();
  });

  test('renders Electronova MERN platform project details', () => {
    render(
      <BrowserRouter>
        <ProjectDetail explicitId="electronova" />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /electromart/i })).toBeInTheDocument();
    expect(screen.getByText(/full-stack electronics e-commerce/i)).toBeInTheDocument();
  });
});
