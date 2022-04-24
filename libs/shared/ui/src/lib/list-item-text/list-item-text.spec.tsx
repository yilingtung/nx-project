import { render } from '@testing-library/react';

import ListItemText from './list-item-text';

describe('ListItemText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListItemText />);
    expect(baseElement).toBeTruthy();
  });
});
