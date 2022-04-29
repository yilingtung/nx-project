import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import DrawerLeft from './drawer-left';

describe('DrawerLeft', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DrawerLeft />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
