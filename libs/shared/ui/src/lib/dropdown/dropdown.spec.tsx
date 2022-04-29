import { render } from '@testing-library/react';

import Dropdown from './dropdown';

describe('Dropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Dropdown
        triggerComponent={
          <div className="inline-flex p-2 bg-primary text-netural-10">
            Dropdown
          </div>
        }
      >
        <div className="inline-flex bg-netural-80 text-netural-10 p-2">
          test
        </div>
      </Dropdown>
    );
    expect(baseElement).toBeTruthy();
  });
});
