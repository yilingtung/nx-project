import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import DrawerBlog from './drawer-blog';

describe('DrawerBlog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DrawerBlog />, { wrapper: MemoryRouter });
    expect(baseElement).toBeTruthy();
  });
});
