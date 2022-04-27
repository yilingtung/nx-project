import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import DrawerDashboard from './drawer-dashboard';

describe('DrawerDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DrawerDashboard />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
