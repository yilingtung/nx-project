import { render } from '@testing-library/react';

import DrawerBlog from './drawer-blog';

describe('DrawerBlog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DrawerBlog />);
    expect(baseElement).toBeTruthy();
  });
});
