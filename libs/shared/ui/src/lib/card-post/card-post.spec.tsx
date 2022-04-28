import { render } from '@testing-library/react';

import CardPost from './card-post';

describe('CardPost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CardPost
        title="如何提升簡報效率與品質？"
        time="2021-04-20 13:00"
        author={{
          id: 0,
          customId: '123',
          name: 'Irene',
          avatar: 'https://fakeimg.pl/300x100/eee/000/?text=A',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
