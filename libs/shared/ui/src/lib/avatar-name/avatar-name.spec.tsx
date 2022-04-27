import { render } from '@testing-library/react';

import AvatarName from './avatar-name';

describe('AvatarName', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AvatarName />);
    expect(baseElement).toBeTruthy();
  });
});
