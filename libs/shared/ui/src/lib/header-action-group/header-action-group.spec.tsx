import { render } from '@testing-library/react';

import HeaderActionGroup from './header-action-group';

describe('HeaderActionGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderActionGroup />);
    expect(baseElement).toBeTruthy();
  });
});
