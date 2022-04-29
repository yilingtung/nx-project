import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import DropdownUser from './dropdown-user';

describe('DropdownUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <DropdownUser />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
