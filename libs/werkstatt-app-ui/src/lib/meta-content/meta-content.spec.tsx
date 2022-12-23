import { render } from '@testing-library/react';

import MetaContent from './meta-content';

describe('MetaContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MetaContent />);
    expect(baseElement).toBeTruthy();
  });
});
