import { render } from '@testing-library/react';

import EditorTitle from './editor-title';

describe('EditorTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditorTitle />);
    expect(baseElement).toBeTruthy();
  });
});
