import { render } from '@testing-library/react';

import ExpandeableHeader from './expandeable-header';

describe('ExpandeableHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpandeableHeader />);
    expect(baseElement).toBeTruthy();
  });
});
