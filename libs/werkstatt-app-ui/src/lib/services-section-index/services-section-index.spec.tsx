import { render } from '@testing-library/react';

import ServicesSectionIndex from './services-section-index';

describe('ServicesSectionIndex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServicesSectionIndex />);
    expect(baseElement).toBeTruthy();
  });
});
