import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubscriptionPage from '../page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
}));

// Mock react-hot-toast
jest.mock('react-hot-toast', () => ({
  success: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
}));

// Mock localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

// Mock fetch
global.fetch = jest.fn();

describe('SubscriptionPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLocalStorage.getItem.mockReturnValue('mock-token');
  });

  it('renders subscription page correctly', () => {
    render(<SubscriptionPage />);
    
    expect(screen.getByText('Upgrade Your Plan')).toBeInTheDocument();
    expect(screen.getByText('Choose the perfect plan for your business needs and unlock powerful features.')).toBeInTheDocument();
    expect(screen.getByText('Subscription')).toBeInTheDocument();
    expect(screen.getByText('Management')).toBeInTheDocument();
  });

  it('displays all three plan cards', () => {
    render(<SubscriptionPage />);
    
    expect(screen.getByText('Free')).toBeInTheDocument();
    expect(screen.getByText('Basic')).toBeInTheDocument();
    expect(screen.getByText('Professional')).toBeInTheDocument();
  });

  it('shows current plan status', () => {
    render(<SubscriptionPage />);
    
    expect(screen.getByText('Current Plan: Free Plan ($0.00 / year)')).toBeInTheDocument();
  });

  it('toggles billing frequency', () => {
    render(<SubscriptionPage />);
    
    const monthlyButton = screen.getByText('Monthly');
    const yearlyButton = screen.getByText('Yearly');
    
    expect(yearlyButton).toHaveAttribute('aria-pressed', 'true');
    
    fireEvent.click(monthlyButton);
    expect(monthlyButton).toHaveAttribute('aria-pressed', 'true');
  });

  it('handles plan selection for free plan', async () => {
    const { toast } = require('react-hot-toast');
    render(<SubscriptionPage />);
    
    const freePlanButton = screen.getByText('CURRENT PLAN');
    fireEvent.click(freePlanButton);
    
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('You are already on the Free Plan');
    });
  });

  it('handles plan upgrade for paid plans', async () => {
    const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        success: true,
        data: {
          url: 'https://checkout.stripe.com/test',
        },
      }),
    } as Response);

    // Mock window.location.href
    delete (window as any).location;
    window.location = { href: '' } as any;

    render(<SubscriptionPage />);
    
    const basicPlanButton = screen.getByText('UPGRADE');
    fireEvent.click(basicPlanButton);
    
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer mock-token',
        },
        body: JSON.stringify({
          priceId: 'price_basic_yearly',
          successUrl: expect.stringContaining('/subscription/success'),
          cancelUrl: expect.stringContaining('/subscription'),
        }),
      });
    });
  });

  it('handles billing preferences', async () => {
    const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: {
            hasActiveSubscription: true,
            customer: { id: 'cus_test_123' },
          },
        }),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          data: {
            url: 'https://billing.stripe.com/test',
          },
        }),
      } as Response);

    // Mock window.location.href
    delete (window as any).location;
    window.location = { href: '' } as any;

    render(<SubscriptionPage />);
    
    // Wait for subscription data to load
    await waitFor(() => {
      expect(screen.getByText('Billing Preferences')).toBeInTheDocument();
    });
    
    const billingButton = screen.getByText('Billing Preferences');
    fireEvent.click(billingButton);
    
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/stripe/customer-portal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer mock-token',
        },
        body: JSON.stringify({
          customerId: 'cus_test_123',
          returnUrl: expect.stringContaining('/subscription'),
        }),
      });
    });
  });

  it('redirects to signup if no token', () => {
    mockLocalStorage.getItem.mockReturnValue(null);
    
    // Mock window.location.href
    delete (window as any).location;
    window.location = { href: '' } as any;

    render(<SubscriptionPage />);
    
    expect(window.location.href).toBe('/signup');
  });

  it('displays loading state during plan upgrade', async () => {
    const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockImplementation(() => new Promise(() => {})); // Never resolves

    render(<SubscriptionPage />);
    
    const basicPlanButton = screen.getByText('UPGRADE');
    fireEvent.click(basicPlanButton);
    
    await waitFor(() => {
      expect(screen.getByText('PROCESSING...')).toBeInTheDocument();
    });
  });

  it('shows professional plan as most popular', () => {
    render(<SubscriptionPage />);
    
    expect(screen.getByText('MOST POPULAR')).toBeInTheDocument();
  });

  it('displays correct pricing based on billing frequency', () => {
    render(<SubscriptionPage />);
    
    // Default is yearly
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByText('$16')).toBeInTheDocument();
    
    // Switch to monthly
    const monthlyButton = screen.getByText('Monthly');
    fireEvent.click(monthlyButton);
    
    expect(screen.getByText('$20')).toBeInTheDocument();
    expect(screen.getByText('$32')).toBeInTheDocument();
  });
});







