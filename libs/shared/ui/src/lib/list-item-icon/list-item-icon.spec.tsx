import { render } from '@testing-library/react';

import ListItemIcon from './list-item-icon';

describe('ListItemIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListItemIcon />);
    expect(baseElement).toBeTruthy();
  });
});
